const { BlogPost, PostCategory } = require('../models');
const CategoryExists = require('../utils/categoryExists');
const { getUserById } = require('./userService');
const { getCategoriesByPostId } = require('./categoryService');

const createPost = async (userId, title, content, categoryIds) => {
  await Promise.all(categoryIds.map(async (currId) => {
    if (!(await CategoryExists(currId))) {
      throw new Error(
        '400|one or more "categoryIds" not found',
      ); 
    }
  }));
  const newPost = await BlogPost.create({ userId, title, content });
  await Promise.all(categoryIds.map(async (currId) => {
    PostCategory.create({ postId: newPost.id, categoryId: currId });
  }));
  return { status: 201, payload: newPost.dataValues };
};

const getPosts = async () => {
  const posts = (await BlogPost.findAll()).map(async (post) => {
    const user = await getUserById(post.userId);
    const categories = (await getCategoriesByPostId(post.id));
    const { published, updated, title, content, id } = post;
    return {
      id,
      title,
      content,
      published,
      updated,
      user,
      categories,
    };
  });
  return { status: 200, payload: await Promise.all(posts) };
};

module.exports = { createPost, getPosts };

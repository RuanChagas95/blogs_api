const { BlogPost, PostCategory } = require('../models');
const CategoryExists = require('../utils/categoryExists');

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

module.exports = { createPost };
const { BlogPost, PostCategory, User, Category } = require('../models');
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
  return newPost.dataValues;
};

const postConfig = { 
  include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
  attributes: {
    exclude: ['userId'],
  },
};
const getPosts = async () => BlogPost.findAll(postConfig);

const getPostById = async (id) => { 
  const post = await BlogPost.findByPk(id.postConfig);
  if (!post) {
    throw new Error('404|Post does not exist');
  }
  return post;
};

module.exports = { createPost, getPosts, getPostById };

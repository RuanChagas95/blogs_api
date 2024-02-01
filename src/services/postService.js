const { Op } = require('sequelize');
const { BlogPost, PostCategory } = require('../models');
const postConfig = require('../utils/postConfig');
const CategoryExists = require('../utils/categoryExists');

const createPost = async (userId, title, content, categoryIds) => {
  await Promise.all(
    categoryIds.map(async (currId) => {
      if (!(await CategoryExists(currId))) {
        throw new Error('400|one or more "categoryIds" not found');
      }
    }),
  );
  const newPost = await BlogPost.create({ userId, title, content });
  await Promise.all(
    categoryIds.map(async (currId) => {
      PostCategory.create({ postId: newPost.id, categoryId: currId });
    }),
  );
  return newPost.dataValues;
};

const getPosts = async () => BlogPost.findAll(postConfig);

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, postConfig);
  if (!post) {
    throw new Error('404|Post does not exist');
  }
  return post;
};

const updatePost = async (ids, title, content) => {
  const { postId, userId } = ids;
  const post = await BlogPost.findByPk(postId);
  if (!post) throw new Error('404|Post does not exist');
  if (post.userId !== userId) throw new Error('401|Unauthorized user');
  await post.update({ title, content, updated: new Date() });
  return BlogPost.findByPk(postId, { ...postConfig, attributes: undefined });
};

const getPostsByQuery = async (query) => {
  const posts = await BlogPost.findAll({
    ...postConfig,
    attributes: undefined,
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${query}%` } },
        { content: { [Op.like]: `%${query}%` } },
      ],
    },
  });
  return posts;
};

module.exports = { createPost, getPosts, getPostById, updatePost, getPostsByQuery };

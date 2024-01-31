const { Category, PostCategory } = require('../models');

const createCategory = async (name) => Category.create({ name });

const getCategories = async () => Category.findAll();

const getCategoryById = async (id) => Category.findByPk(id);

const getCategoriesByPostId = async (postId) => {
  const results = await PostCategory.findAll({
    where: { postId },
  });
  return Promise.all(results.map((item) => getCategoryById(item.dataValues.categoryId)));
};
module.exports = { createCategory, getCategories, getCategoriesByPostId, getCategoryById };

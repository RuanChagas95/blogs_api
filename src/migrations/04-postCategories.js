module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("posts_categories", {
      post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "blog_posts",
          key: "id",
        },
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "categories",
          key: "id",
        },
      },
    });
  },
  
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable("posts_categories");
  },
};

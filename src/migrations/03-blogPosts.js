module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("blog_posts", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        content: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        content: Sequelize.STRING,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      published: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable("blog_posts");
  },
};

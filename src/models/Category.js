const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false, tableName: "categories"}

    );
    Category.associate = (models) => {
      Category.belongsToMany(models.BlogPost, {
        through: "PostCategory",
        foreignKey: "categoryId",
      })
    };
    return Category;
  }
module.exports = CategoryModel;

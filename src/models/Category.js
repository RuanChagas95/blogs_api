const CategoryModel = (sequelize, DataTypes) =>
  sequelize.define(
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

module.exports = CategoryModel;

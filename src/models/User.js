const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      displayName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "display_name",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false, tableName: "users", underscored: true}
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: "userId",
    });
  };

  return User;
};

module.exports = UserModel;

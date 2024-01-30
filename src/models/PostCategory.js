function PostCategoryModel(sequelize, DataTypes) {
    const PostCategory = sequelize.define('PostCategory', {
       post_id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           allowNull: false,
       },
       category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    }, {
        tableName: 'post_categories',
        timestamps: false
    });
    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategory,
            foreignKey: 'post_id',
            otherKey: 'category_id'
        });
        models.Category.belongsToMany(models.BlogPost, {
            as: 'blogPosts',
            through: PostCategory,
            foreignKey: 'category_id',
            otherKey: 'post_id'
        });
    }

    return PostCategory;
    
}

module.exports = PostCategoryModel;
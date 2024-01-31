function PostCategoryModel(sequelize, DataTypes) {
    const PostCategory = sequelize.define('PostCategory', {
       postId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           allowNull: false,
           field: 'post_id'
       },
       categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'category_id'
    },
    }, {
        tableName: 'posts_categories',
        timestamps: false,
        underscored: true
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
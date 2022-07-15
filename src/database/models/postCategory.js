module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
        categoryId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
    },
    { 
        timestamps: false 
    });
  
    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        foreignKey: 'postId',
        as: 'blogPost',
        through: PostCategory,
        otherKey: 'categoryId'
      });
      models.Category.belongsToMany(models.BlogPost, {
        foreignKey: 'categoryId',
        as: 'categories',
        through: PostCategory,
        otherKey: 'postId'
      });
    };
  
    return PostCategory;
};
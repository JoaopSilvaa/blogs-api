module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: { type: DataTypes.INTEGER, foreignKey: true },
        categoryId: { type: DataTypes.INTEGER, foreignKey: true },
    },
      { 
        timestamps: false 
    });
  
    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        as: 'Categories',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
      models.Category.belongsToMany(models.BlogPost, {
        as: 'BlogPosts',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
    };
  
    return PostCategory;
  };
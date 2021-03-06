const Category = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
    underscored: false,
  });

  category.associate = (models) => {
    category.hasMany(models.PostCategory,
      { foreignKey: 'id', as: 'categoryId' });
  };

  return category;
};

module.exports = Category; 
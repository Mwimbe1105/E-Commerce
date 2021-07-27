// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "categoryID"
});

// Categories have many Products
Category.hasMany(product,{
  foreignKey: "categoryID"
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(product,{
  through:ProductTag
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

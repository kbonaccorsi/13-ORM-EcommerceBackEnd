// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Product.belongsTo(Category)

Category.hasMany(Product)

Product.belongsToMany(Tag)

Tag.hasMany(Product)
//using the `ProductTag` through model.

Tag.belongsToMany(Product)

Product.hasMany(Tag)
//using the `ProductTag` through model.



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

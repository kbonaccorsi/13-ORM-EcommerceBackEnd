// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

// * `Product`

//   * `id`
  
//     * Integer.
  
//     * Doesn't allow null values.
  
//     * Set as primary key.
  
//     * Uses auto increment.

//   * `product_name`
  
//     * String.
  
//     * Doesn't allow null values.

//   * `price`
  
//     * Decimal.
  
//     * Doesn't allow null values.
  
//     * Validates that the value is a decimal.

//   * `stock`
  
//     * Integer.
  
//     * Doesn't allow null values.
  
//     * Set a default value of `10`.
  
//     * Validates that the value is numeric.

//   * `category_id`
  
//     * Integer.
  
//     * References the `Category` model's `id`.


// * `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

// * `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

// > **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.


// Fill out the unfinished routes in `product-routes.js`, `tag-routes.js`, and `category-routes.js` to perform create, read, update, and delete operations using your Sequelize models.

// Note that the functionality for creating the many-to-many relationship for products has already been completed for you.

// > **Hint**: Be sure to look at the mini-project code for syntax help and use your model's column definitions to figure out what `req.body` will be for POST and PUT routes!
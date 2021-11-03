const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;


// * `Category`

//   * `id`

//     * Integer.
  
//     * Doesn't allow null values.
  
//     * Set as primary key.
  
//     * Uses auto increment.

//   * `category_name`
  
//     * String.
  
//     * Doesn't allow null values.

// * `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

// * `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

// > **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.

// Fill out the unfinished routes in `product-routes.js`, `tag-routes.js`, and `category-routes.js` to perform create, read, update, and delete operations using your Sequelize models.

// Note that the functionality for creating the many-to-many relationship for products has already been completed for you.

// > **Hint**: Be sure to look at the mini-project code for syntax help and use your model's column definitions to figure out what `req.body` will be for POST and PUT routes!
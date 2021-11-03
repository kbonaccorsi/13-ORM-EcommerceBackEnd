const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;

// * `ProductTag`

//   * `id`

//     * Integer.

//     * Doesn't allow null values.

//     * Set as primary key.

//     * Uses auto increment.

//   * `product_id`

//     * Integer.

//     * References the `Product` model's `id`.

//   * `tag_id`

//     * Integer.

//     * References the `Tag` model's `id`.

// * `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

// * `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

// > **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.
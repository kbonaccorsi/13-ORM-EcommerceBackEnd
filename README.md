# 13 Object-Relational Mapping (ORM): E-Commerce Back End

GitHub repo:

walkthrough video:

## DESCRIPTION

Your task is to build the back end for an e-commerce site by modifying starter code.

[MySQL2](https://www.npmjs.com/package/mysql2)
[Sequelize](https://www.npmjs.com/package/sequelize)
[dotenv](https://www.npmjs.com/package/dotenv)

*sequelize (https://sequelize.org/master/)-This documentation helps with setting the information in the way desired(timestamp, underscored, prevent table name from pluralizing, etc.)  
*Queries: (https://sequelize.org/master/manual/model-querying-basics.html)

STEPS:
  *in a terminal- authenticate with mysql
    *mysql -u root -p
      *SOURCE db/schema.sql
  *in a new terminal- node server.js
  *use insomnia to test 

  *Look at unit 11 userRoutes.js lines 15-22 for a complete, correctly set up async awaits function.
  


GIVEN a functional Express.js API
  * const express = require('express')

WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
  .env
  *DB_USER
  *DB_PASSWORD
  *DB_NAME


WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
*SOURCE db/schema.sql
*SOURCE db/seeds.sql


WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
*node server.js syncs:
*models(tables)
*database holds tables


WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
*JSON formatted data
  *GET api/categories
  *GET api/products
  *GET api/tags


WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
*CREATE
  *POST api/categories
  *POST api/products
  *POST api/tags
  
*UPDATE
  *PUT api/categories
  *PUT api/products
  *PUT api/tags
  
*DELETE
  *DELETE api/categories
  *DELETE api/products
  *DELETE api/tags

*After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.

![In Insomnia Core, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-demo-01.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia Core:

![In Insomnia Core, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-demo-02.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia Core:

![In Insomnia Core, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-demo-03.gif)

Your walkthrough video should also show the POST, PUT, and DELETE routes for products and tags being tested in Insomnia Core.



* A walkthrough video that demonstrates the functionality of the e-commerce back end must be submitted, and a link to the video should be included in your readme file.

* The walkthrough video must show all of the technical acceptance criteria being met.

* The walkthrough video must demonstrate how to create the schema from the MySQL shell.

* The walkthrough video must demonstrate how to seed the database from the command line.

* The walkthrough video must demonstrate how to start the application’s server.

* The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia Core.

* The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia Core.

* The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia Core.

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * Connects to a MySQL database using the [MySQL2](https://www.npmjs.com/package/mysql) and [Sequelize](https://www.npmjs.com/package/sequelize) packages.

  * Stores sensitive data, like a user’s MySQL username, password, and database name, using environment variables through the [dotenv](https://www.npmjs.com/package/dotenv) package.

  * Syncs Sequelize models to a MySQL database on the server start.

  * Includes column definitions for all four models outlined In the Portfolio Piece instructions.

  * Includes model associations outlined In the Portfolio Piece instructions.


<!-- completed: 
*npm install
*.env is to keep mysql passwords and other private information private
*root route does not have any endpoints
*given only serverside code, NO FRONT END CODE IS GIVEN
*modeling the backend of an ecommerce store
*using express backend on node server and the sql server
using:
  * dotenv (make the .env file, put the key=value information.  In connection.js add require('dotenv').config();, then add process.env.(insert key name) for each item in .env.  Then add .env to gitignore)
  *express
  *mysql2


-->

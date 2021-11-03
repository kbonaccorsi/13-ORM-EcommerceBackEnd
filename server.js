//npm packages
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

//setting express to a variable
const app = express();
//calling the PORT to be used
const PORT = process.env.PORT || 3001;

// Middleware for parsing application/json
app.use(express.json());
// middleware will parse that string into an object containing key value pairs
app.use(express.urlencoded({ extended: true }));
//middleware to use the routes folder to access everything inside of it
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force:false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});

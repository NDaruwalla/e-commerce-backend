const express = require('express');
const routes = require('./routes');
// import sequelize connection

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


// sync sequelize models to the database, then turn on the server
// ## Sync Sequelize to the Database on Server Start
// Create the code needed in `server.js` to sync the Sequelize models to the MySQL database on server start.
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => 
  console.log(`Hey, Buddy! The app is listening on port ${PORT}!`));
});



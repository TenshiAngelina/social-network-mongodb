const express = require('express');
const apiRoutes = require('./routes/apiroutes')
const DB = require("./config/connection")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(express.static)
app.use(apiRoutes)
// Connection string to local instance of MongoDB
// const connectionStringURI = `mongodb://127.0.0.1:27017`;

// Variable to hold the connection
let db;

// Create variable to hold our database name
const dbName = 'socialDB';

DB.once("open", () => {
  app.listen(PORT, () => console.log(`listening at ${PORT}`))
})
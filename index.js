const express = require('express');
const apiRoutes = require('./routes/apiroutes')


const app = express();
const PORT = 3001;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(express.static)
app.use('/routes', apiRoutes)
// Connection string to local instance of MongoDB
// const connectionStringURI = `mongodb://127.0.0.1:27017`;

// Variable to hold the connection
let db;

// Create variable to hold our database name
const dbName = 'socialDB';

app.listen(port, () => console.log(`listening at ${PORT}`))
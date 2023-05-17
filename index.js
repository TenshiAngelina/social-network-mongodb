const express = require('express');

const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;

// Connection string to local instance of MongoDB
const connectionStringURI = `mongodb://127.0.0.1:27017`;

// Variable to initialize a new instance of MongoClient
const client = new MongoClient(connectionStringURI);

// Variable to hold the connection
let db;

// Create variable to hold our database name
const dbName = 'shelterDB';
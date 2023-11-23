const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()



// CONNECTING TO THE DB
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGODB_URI 

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`)
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err)
  })



// CONNECTING THE SERVER
const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})


const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

 const items = require('./routes/api/items');

const app = express();

app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to mongo
mongoose.connect(db, {useNewUrlParser: true})
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err))

//Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));

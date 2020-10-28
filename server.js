const express = require("express");
// const mongoose = require('mongoose');
const apiRoute = require('./routes/api')
// const bodyParser = require('body-parser')
const app = express();
app.use('/api', apiRoute)
app.use(express.static("public"));

// const Meal = require("./db/mongo");
// const path = require("path");

// mongoose.connect(`mongodb+srv://Benjamin:756837God@cluster0.px8cq.mongodb.net/Esculent?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });


//parse express body might replace with body parser
// app.use(express.urlencoded({extended:true}));
// app.use(bodyParser.json());
//used when utilizing the build file
//app.use(express.static(path.join(__dirname, "./frontend/dist")));
//used when using public folder html file





  
  app.listen(3001, () => {
    console.log(`server is running and listening on port 3001`);
  });
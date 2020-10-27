const express = require("express");
const mongoose = require('mongoose');
const Meal = require("./db/mongo");
const path = require("path");
const PORT = 3001;
mongoose.connect("mongodb://localhost/reviews", { useNewUrlParser: true });


const app = express();
//parse express body might replace with body parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//used when utilizing the build file
//app.use(express.static(path.join(__dirname, "./frontend/dist")));
//used when using public folder html file
app.use(express.static("public"));


app.get("/t", function(req, res) {
    var name = req.params.name;
    console.log(name);
    Meal.findOne({NAME: new RegExp(name, 'i')})
    .then(function(){
        console.log();
        res.json();
    })
    .catch(function(err){
        res.json(err);
    })
  });



app.post("/", (req,res)=>{
    console.log("in post request");
    Meal.create(req.body)
    .then(function(){
        res.json();
    })
    .catch(function(err){
        res.json(err);
    })
})



  
  app.listen(PORT, () => {
    console.log(`server is running and listening on port ${PORT}`);
  });


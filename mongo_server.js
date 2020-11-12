const express = require("express");
const mongoose = require('mongoose');
const Users = require("./db/mongo");
const path = require("path");
const PORT = 3001;
mongoose.connect("mongodb://localhost/users", { useNewUrlParser: true }, { useFindAndModify: false });


const app = express();
//parse express body might replace with body parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//used when utilizing the build file
//app.use(express.static(path.join(__dirname, "./frontend/dist")));
//used when using public folder html file
app.use(express.static("public"));


//get finds one match based off of name entered login
app.get("/api/login/:user/:pass", function(req, res) {
    var name = req.params.user;
    var password= req.params.pass;
    
    Users.findOne({name: new RegExp(name, 'i')})
    .then(function(data){ 
        if(data.password===password) {      
        res.json("Successfully logged in");
        }else{
            res.json("Incorrect Password");
        }
    })
    .catch(function(err){
        res.json(err);
    })
  });


  //get request to user based on date selected.
  app.post("/api/date", function(req,res){
    var date=req.body.datePicked;
    var name=req.body.name;
    

    Users.findOne({name: new RegExp(name, 'i')})
    .then(function(data){
       console.log(typeof data.mealPlan);
       if(typeof data.mealPlan === 'undefined'){
           res.json("No Recipe");
       }
        else if(typeof data.mealPlan[date] === 'undefined'){
            res.json("No Recipe")
            
        }else{
            console.log(data);
            res.json(data);
            
        }
        
    })

  })


//post new entry into users new user
app.post("/signUp", (req,res)=>{

    var newUser= {
        name:req.body.name,
        password:req.body.password,
        mealPlan:{}
    }
    console.log("in post request");
    Users.create(newUser)
    .then(function(data){
       
        res.json("User Created");
    })
    .catch(function(err){
        res.json(err);
    })
})

//for proxy to render the dist files
// app.get('/itemreview', (req, res) => {
//     res.sendFile(path.join(`${__dirname}/frontend/dist/bundle.js`))
//   });

app.post("/save", (req,res) => {
    let date =`${req.body.date}`;
    let query= {name: req.body.name};
    let data= {
        mealPlan:{
            [date]: {

                    breakfast: req.body.breakfast,
                    bingredients: req.body.btext,
                    consumedB: req.body.consumedB,
                    lunch: req.body.lunch,
                    lingredients: req.body.ltext,
                    consumedL: req.body.consumedL,
                    dinner: req.body.dinner,
                    dingredients: req.body.dtext,
                    consumedD: req.body.consumedD,
               },
        }
    }
   
    Users.findOneAndUpdate(query, data, {new:true}, function(err,doc){
        
    })
  
    
    // Users.findOneAndUpdate(query,data, {upsert: true}, function(err, doc) {
    //     if (err){ return res.json(500, {error: err});
    // }else{
    //     return res.json('Succesfully saved.');
    // }}
       
    // )
});

//get specific product by name

  
  app.listen(PORT, () => {
    console.log(`server is running and listening on port ${PORT}`);
  });





const mongoose = require('mongoose');
const { Schema } = mongoose;

//schema for reviews
const MealSchema = new Schema({
  //update with our schema layout
    NAME:  String, // String is shorthand for {type: String}
    ACCOUNT: String,
    RATING:   Number,
    COMMENT: String  
  });

  //model for out schema
const Meal = mongoose.model('Meal', MealSchema);
//create for one instance or doc and insertMany for big batched



module.exports =Meal;


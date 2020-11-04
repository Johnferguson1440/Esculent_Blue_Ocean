const mongoose = require('mongoose');
const { Schema } = mongoose;

 //schema for Esculent
 const userSchema = new Schema({
    
         name: String,
         password: String,
         mealPlan:{
             date: {
                 type: Date,
                 default: Date.now
                },
                breakfast: {},
                 consumedB: Boolean,
                 lunch: {},
                 consumedL: Boolean,
                 dinner: {},
                 consumedD: {},
         },
    
 });
const Users= mongoose.model('Users', userSchema)
 module.exports =Users;
//   //update with our schema layout
//    // String is shorthand for {type: String}
    

//   //model for out schema

// //create for one instance or doc and insertMany for big batched





const mongoose = require('mongoose');
const { Schema } = mongoose;

 //schema for Esculent
 const userSchema = new Schema({
    
         name: String,
         password: String,
         favorite:[],
         mealPlan:{
                 
        //      date: {
                
        //              breakfast: {},
        //              consumedB: Boolean,
        //              lunch: {},
        //              consumedL: Boolean,
        //              dinner: {},
        //              consumedD: Boolean,
        //         },
         },
    
 });
const Users= mongoose.model('Users', userSchema)
 module.exports =Users;
//   //update with our schema layout
//    // String is shorthand for {type: String}
    

//   //model for out schema

// //create for one instance or doc and insertMany for big batched





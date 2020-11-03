const express = require("express");
const mongoose = require('mongoose');
const routes = require('./routes/api/routes');
const app = express();

const mongodbURI = 'mongodb+srv://Benjamin:12345@cluster0.px8cq.mongodb.net/Esculent?retryWrites=true&w=majority'
const bodyParser = require('body-parser');
const { default: Axios } = require("axios");
// const Meal = require("./db/mongo");
// const path = require("path");
mongoose
.connect(mongodbURI || 'mongodb://localhost/esculent', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!!!!!!1!!!')
});

// Schema
const Schema = mongoose.Schema;
const EsculiciousSchema = new Schema({
      name: String,
      password: String
}); 

// model 
const esculicious = mongoose.model('Esculicious', EsculiciousSchema);

// const data = {
//   name: 'boJangles',
//   password: '43455443'
// };

// const newEsculicious = new esculicious(data);
  
// newEsculicious.save((error) => {
//   if (error) {
//     console.log('oh nooo')
//   } else {
//     console.log('data has been saved')
//   }
// });

app.get('/esculicious', (req,res) => {
  const data = {
    username: 'accimeesterlin',
    age: 5
  };
  esculicious.find({  })
  .then((data) => {
    console.log('Data: ', data)
  })
  .catch((error) => {
    console.log('no data');
  });
  res.json(data);
})

app.listen(3001, () => {
  console.log(`server is running and listening on port 3001`);
})



//parse express body might replace with body parser
// app.use(express.urlencoded({extended:true}));
// app.use(bodyParser.json());
//used when utilizing the build file
//app.use(express.static(path.join(__dirname, "./frontend/dist")));
//used when using public folder html file





  
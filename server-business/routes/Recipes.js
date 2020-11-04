var express = require('express');
var router = express.Router();
const app = express();
const { default: Axios } = require("axios");
const mongoose = require('mongoose');
const {bApi, lApi, dApi} = require('/Users/badboybenji/Desktop/MCSP05-Work/Esculent_Blue_Ocean/frontend/src/Components/PickIngredients.js')
// app.get('/user/query')
// router.get('/esculicious', (req,res) => {
//   const data = {
//     username: 'accimeesterlin',
//     age: 5
//   };
//   esculicious.find({  })
//   .then((data) => {
//     console.log('Data: ', data)
//   })
//   .catch((error) => {
//     console.log('no data');
//   });
//   res.json(data);
// })

Axios.all([
  Axios.get(bApi),
  Axios.get(lApi),
  Axios.get(dApi)
])
  .then((responseArr => {
    console.log('Date created: ', responseArr[0].data.results[1].title)
    console.log('Date created: ', responseArr[1].data.results[1].title)
    console.log('Date created: ', responseArr[2].data.results[1].title)
    // onSuccess(response)
  // console.log(response.data.results[1].title);
  // console.log(response.data.results[1].summary);
  // console.log(response.data.results[1].id);
  // console.log(response.data.results[1].image);
  // console.log(response.data.results[2]);
  // console.log(response.data.results[3]);
  console.log(response.status);
}))
.catch((error) => {
  console.log(error);
})

var recipeSchema = mongoose.Schema({
  id: Number,
  title: String,
  summary: String,
  image: String,
})

var Data = mongoose.model('Data', recipeSchema)

function onSuccess(response) {
  let array = response;
  let arrayLength = Object.keys(array).length
    console.log(arrayLength); 
    for (var x = 0; x <= arrayLength; x++) {
      let id = response.data.results[x].id
      let title = response.data.results[x].title
      let summary = response.data.results[x].summary;
      let image = response.data.results[x].image;
      console.log(`${title} ${summary} ${image} ${id}`)

      assignDataValue(title, summary, image, id)
    }
}

function assignDataValue(title, summary, image, id) {
  let upData = new Data()
  upData.title = title;
  upData.summary = summary;
  upData.image = image;
  upData.id = id;

  upData.save((error) => {
    if (error) {
      console.log('no save')
    } else {
      console.log('data saved')
    }
  });
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

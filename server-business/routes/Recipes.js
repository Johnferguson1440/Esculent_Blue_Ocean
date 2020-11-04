var express = require('express');
var router = express.Router();
const app = express();
const { default: Axios } = require("axios");


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

Axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=192dd61de4aa4699b4375bf69076d168&number=3&includeIngredients=chicken&instructionsRequired=true&addRecipeInformation=true&minProtein=15')
  .then((response) => {
  console.log(response.data.results[1].title);
  console.log(response.data.results[1].summary);
  console.log(response.data.results[1].id);
  console.log(response.data.results[1].image);
  

  // console.log(response.data.results[2]);
  // console.log(response.data.results[3]);
  console.log(response.status);
})
.catch((error) => {
  console.log(error);
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

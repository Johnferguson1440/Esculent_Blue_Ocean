var express = require('express');
var router = express.Router();
// User model
const User = require('/Users/badboybenji/Desktop/MCSP05-Work/Esculent_Blue_Ocean/db/mongo.js')

router.post('/', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        password: req.body.password
    })

    newItem.save();
})
// login/:user/:pass
/*
1. Response on success
2. Wrong Username and password
3. Wrong Username
4. Wrong Password
*/


module.exports = router;
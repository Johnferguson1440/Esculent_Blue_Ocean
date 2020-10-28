const express = require("express");
const router = express.Router();

const loginRoute = require('./login');
const ingredientsRoute = require('./ingredients');
const goalMeterRoute = require('./goalMeter');


router.use('./goalMeter', goalMeterRoute);
router.use('./ingredients', ingredientsRoute)
router.use('./login', loginRoute);

module.exports = router;
const express = require('express');

const GroceryController = require('../controllers/GroceryController');
const HomeControler = require('../controllers/HomeController');

const router = express.Router();

// Create a route for home.
router.get('/', HomeControler.getHomePage);

// Create a route for getting all groceries.
router.get('/groceriesList', GroceryController.getAll);

router.post('/groceries', GroceryController.create);

module.exports = router;
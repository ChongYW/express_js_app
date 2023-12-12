// Create a grocery controller.

const Grocery = require('../models/GroceryModel');

// Create a function:
// 1. Get all groceries from the database.
// 2. Use try/catch to handle errors.
// 3. Send the user to the page 'grocery_list.ejs'(.\test7App4\views\grocery_list.ejs) and pass the groceries to the page.

exports.getAll = async (req, res) => {
    try {
        const groceries = await Grocery.find();
        res.render('grocery_list', { groceries });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

// Create a function:
// 1. Get the grocery item id, name, price, and quantity from the user.
// 2. Save the grocery item to the database.
// 3. Use try/catch to handle errors.
// 4. Return the grocery item to the user.

exports.create = async (req, res) => {
    try {
        // const grocery = new Grocery(req.body);
        // await grocery.save();
        const { id, item, price, qty } = req.body;

      // Create a new grocery object
      const newGrocery = new Grocery({
        id,
        item,
        price,
        qty
      });

      // Save the grocery to the database
      await newGrocery.save();

        // Redirect the user to the page 'grocery_list.ejs'(.\test7App4\views\grocery_list.ejs).
        res.redirect('/groceriesList');
    } catch (error) {
        res.status(500).json({ message: error });
    }
};


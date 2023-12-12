const express = require('express');
const app = express();
const logger = require('morgan');
const PORT = 3001;

const path = require('path');

var test7html1Router = require('./routes/test7html1');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', test7html1Router);

const groceryList = [
    {
        id: 1,
        name: "Milk",
        price: 2.90,
        quantity: 1
    },
    {
        id: 2,
        name: "Eggs",
        price: 3.99,
        quantity: 1
    },
    {
        id: 3,
        name: "Bread",
        price: 1.99,
        quantity: 1
    }
];

// Create a function:
//1. Get the grocery item id, name, price, and quantity from the user.
// app.get('/groceries/:id', (req, res) => {
//     const id = req.params.id;
//     const grocery = groceryList.find(grocery => grocery.id == id);
//     res.json(grocery);
// });

// Create a function:
// 1. User can update the grocery item name, price, and quantity.
// app.put('/groceries/:id', (req, res) => {
//     const id = req.params.id;
//     const grocery = groceryList.find(grocery => grocery.id == id);
//     grocery.name = req.body.name;
//     grocery.price = req.body.price;
//     grocery.quantity = req.body.quantity;
//     res.json(grocery);
// });

// Crate a function:
// 1. User can add a new grocery item to the list.
app.post('/groceries', (req, res) => {
    const grocery = req.body;
    groceryList.push(grocery);
    res.json(groceryList);
});



app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
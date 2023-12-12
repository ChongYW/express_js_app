// Create a default page for the application, the page is call add_grocery.ejs(.\test7App4\views\add_grocery.ejs).

const HomeControler = {
    getHomePage: (req, res) => {
        res.render('add_grocery');
    }
};

module.exports = HomeControler;
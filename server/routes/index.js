var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Services page. */
router.get('/services', indexController.displayProductsPage);

/* GET Products page. */
router.get('/products', indexController.displayServicesPage);

/* GET Contact page. */
router.get('/contact', indexController.displayContactPage);



module.exports = router;

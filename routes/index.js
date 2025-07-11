var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.redirect('/books');
});
// Add this to the top of your routes/index.js file
router.get('/health', (req, res) => {
	res.send('OK - Application is running');
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Surf-stat App', message: 'Surf\'s up!'});
});

module.exports = router;
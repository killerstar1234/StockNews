const express = require('express');
const router = express.Router();
const axios = require('axios');

// Controllers Here:
const getPrice = require('../controllers/getPrice');
const analysis = require('../controllers/analysis');
const news = require('../controllers/news');


router.get('/analysis', analysis.analysis)


// I use this for the frontend to get the prices
router.get('/getPrice', getPrice.getPrice)

router.get('/news', news.news)

router.get('/search', news.search)



module.exports = router
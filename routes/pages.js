const express = require("express")
const router = express.Router();
const path = require('path')

router.get('/', (req, res) => {
    return res.render('index')
})

router.get('/about', (req, res) => {
    return res.render('about')
})

router.get('/contact', (req, res) => {
    return res.render('contact')
})

router.get('/news', (req, res) => {
    return res.render('news')
})

router.get('/search', (req, res) => {
    return res.render('search')
})

router.get('/stock', (req, res) => {
    return res.render('stock')
})

router.get('/wishlist', (req, res) => {
    return res.render('wishlist')
})

module.exports = router;
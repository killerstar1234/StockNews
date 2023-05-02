const axios = require('axios')
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('4010905433d548219bbb71983e41ae22');
// API key ^


// Top Head Lines will be for the news section
exports.news = (req, res) => {

    newsapi.v2.topHeadlines({
        category: 'business',
        language: 'en',
        country: 'us'
      }).then(response => {

        // Add a hbs page to orginse the articles b4 hand so I dont send in a json file (naked code)
        return res.render('news', response)
        

    });
}

// Specific News will be for the search section
exports.search = async (req, res) => {

    const name = req.query.name;

    if(name) {
        axios.get(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${name}&apikey=6XEOLQXQZUQ3N7X3`)
        .then((data) => {
            return res.render('search', data.data)
        })
        .catch(err => {
            if(err) {
                return res.render('search')
            }
        })        
    } else {
        return res.render('search')
    }
    







}
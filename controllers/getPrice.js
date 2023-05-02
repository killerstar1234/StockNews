const axios = require('axios')


exports.getPrice = (req, res) => {

    const { name } = req.query;

    axios.get(`https://query2.finance.yahoo.com/v10/finance/quoteSummary/${name}?modules=price`).then((data) => {

        priceInfo =  data.data.quoteSummary.result[0].price.regularMarketPrice.raw;
        
        if(priceInfo) {
            return res.json(priceInfo)
        } else {
            return res.json(0)
        }

    }).catch(err => {
        if(err) {
            console.log('err');
            return res.json(0)
        }
    })


}
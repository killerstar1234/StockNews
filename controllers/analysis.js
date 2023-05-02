const axios = require('axios');
const path = require('path');


// This is default stock analysis page... 
// They will be able to press button for more when they want more news, or options, ect...


exports.analysis = (req, res) => {
    
    // Start off with assetProfile, Summary Detail, Defualt Key Statistics, Egs score, recommended trend

    // To have multi modules use %2C between them

    const { name } = req.query

        if(name) {
            let jsonData = [{}];

            axios.get(`https://query2.finance.yahoo.com/v10/finance/quoteSummary/${name}?modules=assetProfile%2CsummaryDetail%2CdefaultKeyStatistics%2CrecommendationTrend%2CesgScores`)
            .then(rawData => {

                data = rawData.data.quoteSummary.result[0]
                if(data.assetProfile) {
                jsonData[0].assetProfile = [{
                    address1: data.assetProfile.address1,
                    city: data.assetProfile.city,
                    state: data.assetProfile.state,
                    zip: data.assetProfile.zip,
                    country: data.assetProfile.country,
                    phone: data.assetProfile.phone,
                    website: data.assetProfile.website,
                    industry: data.assetProfile.industry,
                    sector: data.assetProfile.sector,
                    longBusinessSummary: data.assetProfile.longBusinessSummary,
                    auditRisk: data.assetProfile.auditRisk,
                    boardRisk: data.assetProfile.boardRisk,
                    compensationRisk: data.assetProfile.compensationRisk,
                    shareHolderRightsRisk: data.assetProfile.shareHolderRightsRisk,
                    overallRisk: data.assetProfile.overallRisk
                }]                    
                }

                if(data.recommendationTrend) {
                jsonData[0].recommendationTrend = data.recommendationTrend.trend;
                }

                if(data.esgScores) {
                jsonData[0].esgScores = [{
                    totalEsg: data.esgScores.totalEsg.raw,
                    environmentScore: data.esgScores.environmentScore.raw,
                    socialScore: data.esgScores.socialScore.raw,
                    governanceScore: data.esgScores.governanceScore.raw,
                    ratingYear: data.esgScores.ratingYear,
                    ratingMonth: data.esgScores.ratingMonth,
                    peerGroup: data.esgScores.peerGroup,
                    environmentPercentile: data.esgScores.environmentPercentile,
                    socialPercentile: data.esgScores.socialPercentile,
                    governancePercentile: data.esgScores.governancePercentile,
                    adult: data.esgScores.adult,
                    alcoholic: data.esgScores.alcoholic,
                    animalTesting: data.esgScores.animalTesting,
                    catholic: data.esgScores.catholic,
                    controversialWeapons: data.esgScores.controversialWeapons,
                    smallArms: data.esgScores.smallArms,
                    furLeather: data.esgScores.furLeather,
                    gambling: data.esgScores.gambling,
                    gmo: data.esgScores.gmo,
                    militaryContract: data.esgScores.militaryContract,
                    nuclear: data.esgScores.nuclear,
                    pesticides: data.esgScores.pesticides,
                    palmOil: data.esgScores.palmOil,
                    coal: data.esgScores.coal,
                    tobacco: data.esgScores.tobacco
                }]                    
                }


                if(data.summaryDetail) {
                jsonData[0].summaryDetail = [{
                    previousClose: data.summaryDetail.previousClose.raw,
                    open: data.summaryDetail.open.raw,
                    dayLow: data.summaryDetail.dayLow.raw,
                    dayHigh: data.summaryDetail.dayHigh.raw,
                    regularMarketPreviousClose: data.summaryDetail.regularMarketPreviousClose.raw,
                    regularMarketOpen: data.summaryDetail.regularMarketOpen.raw,
                    regularMarketDayLow: data.summaryDetail.regularMarketDayLow.raw,
                    regularMarketDayHigh: data.summaryDetail.regularMarketDayHigh.raw,
                    dividendRate: data.summaryDetail.dividendRate.raw,
                    exDividendDate: data.summaryDetail.exDividendDate.raw,
                    dividendYield: data.summaryDetail.dividendYield.raw,
                    payoutRatio: data.summaryDetail.payoutRatio.raw,
                    fiveYearAvgDividendYield: data.summaryDetail.fiveYearAvgDividendYield.raw,
                    beta: data.summaryDetail.beta.raw,
                    trailingPE: data.summaryDetail.trailingPE,
                    forwardPE: data.summaryDetail.forwardPE.raw,
                    volume: data.summaryDetail.volume.raw,
                    regularMarketVolume: data.summaryDetail.regularMarketVolume.raw,
                    averageVolume: data.summaryDetail.averageVolume.raw,
                    averageVolume10days: data.summaryDetail.averageVolume10days.raw,
                    averageDailyVolume10Day: data.summaryDetail.averageDailyVolume10Day.raw,
                    marketCap: data.summaryDetail.marketCap.raw
                }]                    
                }


                if(data.defaultKeyStatistics) {
                jsonData[0].defaultKeyStatistics = [{
                    enterpriseValue: data.defaultKeyStatistics.enterpriseValue,
                    profitMargins: data.defaultKeyStatistics.profitMargins,
                    floatShares: data.defaultKeyStatistics.floatShares,
                    sharesOutstanding: data.defaultKeyStatistics.sharesOutstanding,
                    sharesShort: data.defaultKeyStatistics.sharesShort,
                    sharesShortPriorMonth: data.defaultKeyStatistics.sharesShortPriorMonth,
                    sharesShortPreviousMonthDate: data.defaultKeyStatistics.sharesShortPreviousMonthDate,
                    dateShortInterest: data.defaultKeyStatistics.dateShortInterest,
                    sharesPercentSharesOut: data.defaultKeyStatistics.sharesPercentSharesOut,
                    heldPercentInstitutions: data.defaultKeyStatistics.heldPercentInstitutions,
                    shortRatio: data.defaultKeyStatistics.shortRatio,
                    shortPercentOfFloat: data.defaultKeyStatistics.shortPercentOfFloat,
                    trailingEps: data.defaultKeyStatistics.trailingEps,
                    pegRatio: data.defaultKeyStatistics.pegRatio,
                    lastSplitFactor: data.defaultKeyStatistics.lastSplitFactor,
                    lastSplitDate: data.defaultKeyStatistics.lastSplitDate,
                    enterpriseToRevenue: data.defaultKeyStatistics.enterpriseToRevenue,
                    enterpriseToEbitda: data.defaultKeyStatistics.enterpriseToEbitda,
                    lastDividendDate: data.defaultKeyStatistics.lastDividendDate
                }]                    
                }


            // Now add the data inside this webpage
            // Then work on the news I want to first be able to get
                // bussines news top covers then once done with that
                // add in personal copany search news
                // look at replit for the api's


            return res.status(200).render('stock', {
                jsonData: jsonData
            })

            })
            .catch(err => {
                if(err) {
                    console.log('err analysis');
                }
            })


        } else {

            res.render('stock')
        
        }



}


/*

Cashflow Statement History, Financial Data, Calendar Events, Institution Ownership, Insider Holder, Net Share Purchase Activity

*/
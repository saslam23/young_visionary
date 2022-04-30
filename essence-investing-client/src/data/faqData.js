const faqData = [
    {
        id:0,
        panel:'1',
        question:'What is options trading?',
        answer:'Option is a form of trading that gives the buyer (you and me) the right to buy or sell a stock at a set price that you decide.',
        duration: 500
    },
    {
        id:1,
        panel:'2',
        question:'How do I get started in options?',
        answer:'Getting started is very easy. It all starts with the brokerage you decide to use. There are many different brokages available, some of the more popular ones include think or swim, robinhood and webull (My favorite). There are pros and cons with every brokerage but the important thing is to choose one and learn the UI of it.'
        ,duration:700
    },
    {
        id:2,
        panel:'3',
        question:'How much money do I need to start doing options?',
        answer:'There is not a set number that is right to begin options. The important thing is growth which can be started at any number above $1 (Yes you can actually make growth with as little as $1). One thing I advise not as a financial advisor but from experience is use capital that you have to spare, not the capital you use for bills and other expenses.'
        ,duration:900
    },
    {
        id:3,
        panel:'4',
        question:'Okay I’m sold, how do I get started with entering and exiting plays in options?',
        answer:'Awesome you decided to take the risk in investing in yourself for capital growth. To start with the format is generally the same across the board the only major change will be if it is a call or put (Don’t worry if you do not get it now, read below). The format has 4 major parts to it, there is the ticker (This a symbol that corresponds to the company Ex. Apple ticker symbol is AAPL or Amazon ticker symbol is AMZN) the strike price (this is the price you are deciding to buy or sell the stock at), expiration date (this is the date that will determine when your option contract will expire) and the if it is a call or a put (Call = Predicting a price increase, Put = Predicting a price decrease). These are the four major aspects to reading a option format, so let’s use an example.  ',
        answer2:'Example: AAPL Nov 19th 150C @1.50. This is how a normal play will look, let’s break this down to pieces first. First is the ticker symbol in our case “AAPL” which refers to the company Apple. Next is the expiration date which in our case is Nov 19th (Most exp dates will be at the end of a trading week so friday (there are exceptions to this though depending on the company). Next is the strike price in our case is “150” this is the price we are predicting the stock to go near and if you look right after there is a “C” this stands for a CALL. If hypothetically there is a “P” it will be a PUT. The final part is the “@1.50” this is the price the person alerting the trade got into. No, this does not mean the price to get into this is $1.50, remember in options you are buying 100x so whatever number you see after the “@” will be x 100. So in our case the price the trader got in was at $150.'
        ,duration:1100
    }
]


export default faqData;
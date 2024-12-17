//? first try

// var maxProfit = function(prices) {
//     let maxPro = 0;
//     for(let i = 0; i < prices.length; i++) {
//         for(let j = i+1; j < prices.length; j++){
//             if(prices[j] - prices[i] > maxPro){
//                 maxPro = prices[j] - prices[i];
//             }
//         }
//     }
//     // return maxPro;
//     console.log(maxPro);
    
// };


//? second try by own

//! no mind can search for algorithm 

//? search the algorthm and then i hear about kadane's name 

var maxProfit = function(prices) {
    let maxPro = 0;
    let lowest = prices[0];
    for( let i = 0; i < prices.length; i++ ) {
        lowest = Math.min(lowest, prices[i]);
        let profit = prices[i] - lowest;
        maxPro = Math.max(profit, maxPro);
    }
    
    console.log(maxPro);    
    
};

prices = [7,1,5,3,6,4];
maxProfit(prices);
// function maxProfit(prices: number[]): number {
//     let complement = 0;
//     for(let i = 0; i < prices.length; i++){
//         for(let j = i+1; j <= prices.length; j++){
//             if(prices[j] - prices[i] > complement){
//                 complement = prices[j] - prices[i];
//             }
//         }
//     }
//     return complement;
// };

// console.log(maxProfit([7,4,5,3,6,1]))

function maxProfit(prices: number[]): number {
    let minPrice = Infinity; // Initialize minPrice to a very large number
    let maxProfit = 0; // Initialize maxProfit to 0

    // Iterate over the prices array
    for (let i = 0; i < prices.length; i++) {
        // Check if the current price is less than minPrice
        if (prices[i] < minPrice) {
            minPrice = prices[i]; // Update minPrice to the current price
        } 
        // Check if the current profit (current price - minPrice) is greater than maxProfit
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice; // Update maxProfit to the new maximum profit
        }
    }

    return maxProfit; // Return the maximum profit found
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5


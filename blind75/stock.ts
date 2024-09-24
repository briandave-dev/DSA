// Here i have a nested loop to compare each element with all the
// ones next to it one after the other

function maxProfit(prices: number[]): number {
    let complement = 0;
    for(let i = 0; i < prices.length; i++){
        for(let j = i+1; j <= prices.length; j++){
            if(prices[j] - prices[i] > complement){
                complement = prices[j] - prices[i];
            }
        }
    }
    return complement;
};

function optimisedMaxProfit(prices: number[]): number {
    let maxProfit = 0;
    let minValue = Infinity;

    for(let i: number = 0; i < prices.length; i++){
        if(minValue > prices[i]){
            minValue = prices[i];
        } else if(prices[i] - minValue > maxProfit){
            maxProfit = prices[i] - minValue;
        } 
    }
    return maxProfit;
}


console.log(optimisedMaxProfit([7, 1, 5, 3, 6, 4])); // Output: 5


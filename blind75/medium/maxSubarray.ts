function maxSubArray(nums: number[]): number {
    let maxSum = -Infinity;
    let currentSum = 0;

    for (const num of nums) {
        currentSum += num;
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0; // Reset current sum if it drops below zero
        }
    }

    return maxSum;
}

// Example usage:
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(maxSubArray([1]));                               // Output: 1
console.log(maxSubArray([5, 4, -1, 7, 8]));                 // Output: 23

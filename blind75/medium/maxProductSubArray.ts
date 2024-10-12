function maxProduct(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    
    // Initialize the maximum and minimum products to the first element
    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        // If the current number is negative, swap max and min
        if (num < 0) {
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }

        // Update the max and min products
        maxProduct = Math.max(num, maxProduct * num);
        minProduct = Math.min(num, minProduct * num);

        // Update the result with the maximum product found
        result = Math.max(result, maxProduct);
    }

    return result;
}

// Example usage:
console.log(maxProduct([2, 3, -2, 4]));  // Output: 6
console.log(maxProduct([-2, 0, -1]));     // Output: 0
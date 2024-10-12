function lengthOfLIS(nums: number[]): number {
    const tails: number[] = [];

    for (const num of nums) {
        let left = 0, right = tails.length;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        // If left is equal to the length of tails, we can extend the subsequence
        if (left === tails.length) {
            tails.push(num);
        } else {
            tails[left] = num; // Replace
        }
    }

    return tails.length;
}

// Example usage:
const numss1 = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(numss1)); // Output: 4

const numss2 = [0, 1, 0, 3, 2, 3];
console.log(lengthOfLIS(numss2)); // Output: 4

const numss3 = [7, 7, 7, 7, 7, 7, 7];
console.log(lengthOfLIS(numss3)); // Output: 1

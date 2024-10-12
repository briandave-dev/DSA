function longestConsecutive(nums: number[]): number {
    const set = new Set(nums);
    let max = 0;

    for (const num of nums) {
        if (set.has(num + 1))
            continue;

        let counter = 1, current = num;

        while (set.has(--current))
            counter++;

        max = Math.max(counter, max);
    }

    return max;
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Output: 9
console.log(longestConsecutive([])); // Output: 0
console.log(longestConsecutive([5])); // Output: 1
console.log(longestConsecutive([2, 2, 2, 2])); // Output: 1

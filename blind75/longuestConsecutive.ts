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
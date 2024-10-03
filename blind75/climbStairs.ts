function climbStairs(n: number): number {
    // Memoization array to store the results of subproblems
    const memo: number[] = [];

    function climb(n: number): number {
        // Base cases
        if (n === 0 || n === 1) return 1;

        // Check if we've already computed the result for this step
        if (memo[n] !== undefined) return memo[n];

        // Recursive relation: f(n) = f(n-1) + f(n-2)
        memo[n] = climb(n - 1) + climb(n - 2);
        
        return memo[n];
    }

    return climb(n);
}


console.log(climbStairs(3));
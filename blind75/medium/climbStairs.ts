function climbStairs(n: number, memo: number[] = []): number {
    if (n === 0 || n === 1) return 1;
    if (memo[n] !== undefined) return memo[n];
    return memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
}

console.log(climbStairs(3))
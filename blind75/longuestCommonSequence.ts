function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length;
    const n = text2.length;

    // Create a 2D array to store lengths of longest common subsequence.
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Fill the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                // If characters match, add 1 to the length of the subsequence found so far
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // If characters don't match, take the maximum from the previous results
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // The length of the longest common subsequence is in dp[m][n]
    return dp[m][n];
}

// Example usage:
console.log(longestCommonSubsequence("abcde", "ace")); // Output: 3
console.log(longestCommonSubsequence("abc", "abc"));   // Output: 3
console.log(longestCommonSubsequence("abc", "def"));   // Output: 0

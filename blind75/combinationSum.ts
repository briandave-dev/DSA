function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];

    function backtrack(remaining: number, start: number, currentCombo: number[]): void {
        if (remaining === 0) {
            result.push([...currentCombo]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > remaining) continue; // Skip if the candidate is larger than the remaining sum

            currentCombo.push(candidates[i]);
            backtrack(remaining - candidates[i], i, currentCombo); // i instead of i+1 since we can reuse the same element
            currentCombo.pop(); // Backtrack
        }
    }

    backtrack(target, 0, []);
    return result;
}
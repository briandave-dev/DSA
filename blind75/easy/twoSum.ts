function twoSum(nums: number[], target: number): number[] {
    let numMap: Map<number, number> = new Map();

    for(let i:number = 0; i<nums.length;i++){
        const complement : number = target - nums[i];
        if(numMap.has(complement)){
            return [numMap.get(complement)!, i];
        }
        numMap.set(nums[i], i)
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
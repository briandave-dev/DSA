// In this solution i just loop through numbers from 0 to n, check if the
// number is in the array then return the number if it is not in it

// It as a time complexity of O(n^2) because of the nested loop caused by
// includes function

function missingNumber(nums: number[]): any {
    for(let i:number = 0; i <= nums.length; i++){
        if(!nums.includes(i)){
            return i
        }
    }
    return
};

// This solution follows the logic that missing number is going to be 
// the diffenre between the sum of first n terms and the actual sum of
// all the numbers in our array of numbers

// It has a time complexity if O(n) because the reduce function loops 
// the array once to add upp each element

function optimisedMissingNumber(nums : number[]){
    const n = nums.length;
    const expectedSum = ((n*(n+1))/2)
    const actualSum = nums.reduce((acc, val) => acc + val, 0)
    const missingNumber : number =  (expectedSum - actualSum)
    return missingNumber
}

console.log(optimisedMissingNumber([9,6,4,2,3,5,7,0,1]))
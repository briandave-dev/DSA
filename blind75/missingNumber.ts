//In this solution i just loop through numbers from 0 to n, check if the
//number is in the array then return the number if it is not in it

//It as a time and space complexity of O(n^2)

function missingNumber(nums: number[]): any {
    for(let i:number = 0; i <= nums.length; i++){
        if(!nums.includes(i)){
            return i
        }
    }
    return
};

function optimisedMissingNumber(nums : number[]){
    const n = nums.length;
    const expectedSum = ((n*(n+1))/2)
    const actualSum = nums.reduce((acc, val) => acc + val, 0)
    return expectedSum - actualSum
}

console.log(optimisedMissingNumber([9,6,4,2,3,5,7,0,1]))
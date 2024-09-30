// This solution adds each element to a hashmap and checks if 
// the number is in the hashmap before adding it to return true if a 
// duplicate is found
// it has a time and space complexity of O(n)

function containsDuplicate(nums: number[]): boolean {
    let numMap: Map<number, number> = new Map();
  
    for(let i = 0; i < nums.length; i++){
        if(numMap.has(nums[i])){
            return true
        } else {
            numMap.set(nums[i], i);
        }
    }

    return false
}

// This solution is based on the fact that JavaScript sets can only contain unique values
// so making our array a set, if the length of our set is less than the length of the array, 
// it means we had a duplicate in the array and we can then return true 

function optimisedContainsDuplicate(nums: number[]): boolean {
    return (new Set(nums).size < nums.length);    
}

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
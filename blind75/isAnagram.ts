function isAnagram(s: string, t: string) {
    const cleanedS = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanedT = t.toLowerCase().replace(/[^a-z0-9]/g, '');

    let charCount: { [char: string]: number } = {};

    if(cleanedS.length !== cleanedT.length)
        return false;

    for(let char of cleanedS){
        charCount[char] = (charCount[char] || 0) + 1; 
        // (charCount[char] || 0) is 0 if the char is not in the object and it is the 
        // number of occurences of the character in the object if it is in
        console.log(charCount);
    }

    for(let char of cleanedT){
        if(!charCount[char]){
            return false;
        }
        charCount[char]--;
    }

    return true;
}

console.log(isAnagram('anagram','nagaram'))

//  The above solution works for Unicode characters as well, as
//  JavaScript/TypeScript strings are Unicode-based. The charCount 
//  map can store counts for any Unicode character, not just 
//  English letters.a
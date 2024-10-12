function isPalindrome(s: string): boolean {
    let cleanedString = ''
    for (let i = 0; i < s.length; i++) {
        const char = s[i].toLowerCase();
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            cleanedString += char;
        }
    }    
    let reversedString = '';
    for (let i = cleanedString.length - 1; i >= 0; i--) {
        reversedString += cleanedString[i];
    }
    
    return cleanedString === reversedString;
}

function optimisedIsPalindrome(s: string): boolean {
    // Convert string to lowercase and remove non-alphanumeric characters
    const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Compare the cleaned string with its reverse
    const reversedString = cleanedString.split('').reverse().join('');
    
    return cleanedString === reversedString;
}

console.log(optimisedIsPalindrome("A man, a plan, a canal: Panama")); // true
console.log(optimisedIsPalindrome("race a car")); // false
console.log(optimisedIsPalindrome(" ")); // true
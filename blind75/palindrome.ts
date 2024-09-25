function isPalindrome(s: string): boolean {
    // Convert string to lowercase and remove non-alphanumeric characters
    const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Compare the cleaned string with its reverse
    const reversedString = cleanedString.split('').reverse().join('');
    
    return cleanedString === reversedString;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
var stack = [];

var word = "banana";
var rword = "";

for (var i = 0; i < word.length; i++){
    stack.push(word[i]);
}

for (var i = 0; i < word.length; i++){
    rword += stack.pop();
}

if(word === rword){
    console.log(word + " is a palindrome");
} else {
    console.log(word + " is not a palindrome")
}
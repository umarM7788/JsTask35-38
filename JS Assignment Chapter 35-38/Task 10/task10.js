function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
}

// Get user input using prompt
var inputString = prompt('Enter a string to check if it is a palindrome:');

if (isPalindrome(inputString)) {
   document.write(inputString + " is a palindrome.");
} else {
    document.write(inputString + " is not a palindrome.");
}

function countOccurrences(str, letter) {
    
    str = str.toLowerCase();
    letter = letter.toLowerCase();

    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }

    return count;
}


var inputString = "This is a sample string with some letter occurrences.";
var targetLetter = "s";
var result = countOccurrences(inputString, targetLetter);
document.write("The letter '" + targetLetter + "' occurs " + result + " times in the string.");

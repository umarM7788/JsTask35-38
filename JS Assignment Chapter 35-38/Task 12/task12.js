var inputString = prompt('Enter a sentence of your choice and we will check what is the lonngest word on your sentence: ')
var words = inputString.split(' ');

var longestWord = '';
var longestLength = 0;

for (var i = 0; i < words.length; i++) {
    var word = words[i];
    word = word.replace(/[^a-zA-Z0-9]/g, '');

    if (word.length > longestLength) {
        longestWord = word;
        longestLength = word.length;
    }
}

document.write("The longest word is: " + longestWord);

var inputString = "hello world"; // Replace with your input string
var words = inputString.split(' ');

for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}

var capitalizedString = words.join(' ');

console.log(capitalizedString);

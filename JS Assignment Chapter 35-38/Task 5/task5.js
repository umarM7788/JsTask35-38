function square(number) {
    return number * number;
}

var num = +prompt('Enter any number that you want to square: '); 
var result = square(num);
document.write("The square of " + num + " is " + result);
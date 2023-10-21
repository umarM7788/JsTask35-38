function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


var num = +prompt('Enter the number you want to take factorial of: '); 
var result = factorial(num);
document.write("The factorial of " + num + " is " + result);

function addNumbers() {
    
    var num1 = +prompt('Enter the first number:');
    
    
    var num2 = +prompt('Enter the second number:');
    
   
    if (isNaN(num1) || isNaN(num2)) {
        return 'Invalid input. Please enter valid numbers.';
    }
    
   
    var sum = num1 + num2;
    
    return 'The sum of ' + num1 + ' and ' + num2 + ' is ' + sum;
}


var result = addNumbers();
alert(result);
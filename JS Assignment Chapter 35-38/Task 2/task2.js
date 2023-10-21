function greetUser(firstName, lastName) {
    var fullName = firstName + ' ' + lastName;
    alert('Hello, ' + fullName + '! Welcome.');
}

// Example usage of the function
var userFirstName = prompt('Enter your first name:');
var userLastName = prompt('Enter your last name:');

greetUser(userFirstName, userLastName);
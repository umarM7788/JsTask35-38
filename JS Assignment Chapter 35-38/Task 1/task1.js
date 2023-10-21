function displayCurrentDateTime() {
    // Create a Date object to get the current date and time
    var currentDate = new Date();

    // Format the date and time as a string
    var dateTimeString = currentDate.toLocaleString();

    // Use document.write to display the current date and time on the document
    document.write('Current Date & Time: ' + dateTimeString);
}

// Call the function to display the current date and time
displayCurrentDateTime();
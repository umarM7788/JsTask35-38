var startNum = parseInt(prompt('Enter the start number:'));
var endNum = parseInt(prompt('Enter the end number:'));

if (isNaN(startNum) || isNaN(endNum)) {

    alert('Invalid input. Please enter valid numbers.');


} else if (startNum > endNum) {

    alert('Start number should be less than or equal to the end number.');


} else {

    
    for (var i = startNum; i <= endNum; i++) {
        document.write(i + '<br>');
    }
}
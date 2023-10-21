var num1 = +prompt('Enter your first number: ')
var num2 = +prompt('Enter your second number: ')


var add = num1 + num2
var sub = num1 - num2
var mul = num1 * num2
var div = num1 / num2


document.write(
    '<table border = "1px">' +
    "<tr>"+
    "<th>" + "ADDITION OF TWO NUMBERS" + '</th>' +
    "</tr>" +
    '<td>' + add + '</td>' +
    '</tr>' +




    "<tr>"+
    "<th>" + "SUBRATRACTION OF TWO NUMBERS" + '</th>' +
    "</tr>" +
    '<td>' + sub + '</td>' +
    '</tr>' +


    "<tr>"+
    "<th>" + "MULTIPLICATION OF TWO NUMBERS" + '</th>' +
    "</tr>" +
    '<td>' + mul + '</td>' +
    '</tr>' +


    "<tr>"+
    "<th>" + "DIVISION OF TWO NUMBERS" + '</th>' +
    "</tr>" +
    '<td>' + div + '</td>' +
    '</tr>' +
    '</table>'






)

function calculateHypotenuse (base, perpendicular) {
    function calculateSquare(number) {
        return number * number;
    }

    var baseSquared = calculateSquare(base);
    var perpendicularSquared = calculateSquare(perpendicular);
    var hypotenuseSquared = baseSquared + perpendicularSquared;
    var hypotenuse = Math.sqrt(hypotenuseSquared);

    return hypotenuse;
}


var baseLength = +prompt('Enter the length of the base in centimeters: ');
var perpendicularLength = +prompt('Enter the length of the perpendicular in centimeters: '); 

var result = calculateHypotenuse(baseLength, perpendicularLength);
document.write("The hypotenuse of the right triangle is: " + result);

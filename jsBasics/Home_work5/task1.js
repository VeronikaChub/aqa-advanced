//function expression
let square = function (width, height) {
    let area = width * height
    return area;
}
let result = square(3, 9)
console.log(result)

//function declaration
function square1(width, height) {
    return width * height;
}
console.log(square1(3, 4));

//arrow function
const square2 = (width, height) => width * height;

console.log(square2(6, 8));
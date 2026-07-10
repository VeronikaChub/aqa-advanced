let Adult = function (age) {
    if (age >= 18) {
        return true;
    }
    return false;
};
let value1 = Adult(15);
let value2 = Adult(25);

console.log(value1);
console.log(value2);
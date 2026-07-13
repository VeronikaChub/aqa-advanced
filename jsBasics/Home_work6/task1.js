let Calculator = function (num, callbackeven, callbackodd) {
    if (num % 2 === 0) {
        callbackeven(num);
    } else {
        callbackodd(num);
    }
};

let evenCallback = function (num) {
    console.log(`number is even.`);
};

let oddCallback = function (num) {
    console.log(`number is odd.`);
};

// Example usage:
Calculator(4, evenCallback, oddCallback); // Output: The number 4 is even.
Calculator(7, evenCallback, oddCallback); // Output: The number 7 is odd.
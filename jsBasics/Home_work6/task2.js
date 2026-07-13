
let counter = function (num) {
    console.log(num)
    if (num >= 0) {
        return counter(num - 1);
    }

}

const result = counter(5);
console.log(result); 
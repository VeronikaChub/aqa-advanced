let Order = function (available, ordered) {

    if (available < ordered) {
        return "Your order is too large, we don’t have enough goods.";
    } if (ordered === 0) {
        return "Your order is empty";
    } else {
        return "Your order is accepted";
    }
};

console.log(Order(5, 5));
console.log(Order(500, 0));
console.log(Order(100, 300)); 
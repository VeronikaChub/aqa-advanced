let Order = function (available, ordered) {

    if (available < ordered) {
        console.log("Your order is too large, we don’t have enough goods.");
    } else if (ordered === 0) {
        console.log("Your order is empty");
    } else {
        console.log("Your order is accepted");
    }
}

Order(5, 5);
Order(500, 0);
Order(100, 300); 
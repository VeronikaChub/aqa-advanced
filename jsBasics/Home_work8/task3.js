const car1 = {
    brand: "Toyota",
    model: "Camry",
    year: 1234
};
const car2 = {

    brand: "BMW",
    model: "X6",
    owner: "Veronika"
};
const car3 = { ...car1, ...car2 };
console.log(car3);

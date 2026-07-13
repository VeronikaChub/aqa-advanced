
let calcilator = function (numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Ділити на 0 не можна!");
    }
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Ділення на недопустиме!");
    }
    return numerator / denominator;
}

try {
    const result = calcilator("mdmd", 7);
    console.log(result);
} catch (error) {
    console.error("Сталася помилка:", error.message);
} finally {
    console.log("Виконано!")
};

try {
    const result = calcilator(100, 0);
    console.log(result);
} catch (error) {
    console.error("Сталася помилка:", error.message);
} finally {
    console.log("Виконано!")
};
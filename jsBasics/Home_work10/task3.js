const Request1 = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo = await response.json();

    return todo;
};
const Request2 = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();

    return user;
};
const value = Promise.all([Request1(), Request2()])
    .then(result => {
        console.log("Promise.all:", result);
    })
    .catch(error => {
        console.error("Promise.all failed:", error);
    });
const value2 = Promise.race([Request1(), Request2()])
 .then(result => {
        console.log("Promise.race:", result);
    })
    .catch(error => {
        console.error("Promise.race failed:", error);
    });

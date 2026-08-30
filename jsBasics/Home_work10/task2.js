const Request1 = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(todo =>{
            return todo
        })
        .catch(error => {
    console.error("Request failed:", error);
})
};

const Request2 = () => {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(user => {
            return user
        })
        .catch(error => {
            console.error("Request failed:", error)
        })
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

console.log(value);
console.log(value2);
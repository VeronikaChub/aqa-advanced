class Todo{
async getTodo(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo = await response.json();
    return todo;
}
}

class User{
async getUser(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    return user;
}
}
const todo = new Todo();
const user = new User();

todo.getTodo()
user.getUser()
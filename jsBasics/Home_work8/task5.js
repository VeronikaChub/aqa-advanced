const users = [
    {
        name: "Veronika",
        age: 11,
        email: "chussn@jndnd.djn",
        isActive: true
    },
    {
        name: "Andriy",
        age: 19,
        email: "chcnncnc@jndnd.djn",
        isActive: false
    },
    {
        name: "Evgen",
        age: 19,
        email: "chjndj@jndnd.djn",
        isActive: true
    }
]
for (const { name, age, email, isActive } of users) {
    console.log(name, age, email, isActive);
}
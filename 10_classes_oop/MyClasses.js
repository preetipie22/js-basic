//ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     ecryptPassword() {
//         return `${this.password}abc`
//     }

//     changeUserName() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const preeti = new User("preetipie", "preeti@gmail.com", "123");
// const manu = new User("preetipie", "preeti@gmail.com", "123");

// console.log(preeti.ecryptPassword());
// console.log(preeti.changeUserName());

//behind the scene

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.ecryptPassword = function () {
    return `${this.password}abc`
}

User.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}`
}

let lallu = new User("lallu", "lallu@gmail.com", "123");
let lallu2 = new User("lallu2", "lallu@gmail.com", "123");

console.log(lallu.ecryptPassword());
console.log(lallu.changeUserName());
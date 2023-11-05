class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const preeti = new User("Preeti");
console.log(preeti.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone@gmail.com");

console.log(iphone.createId());
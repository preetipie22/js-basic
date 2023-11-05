class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const preeti = new Teacher("preeti", "preeti@gmail.com", "123");
preeti.addCourses();

const manu = new Teacher("manu");
manu.logMe();

console.log(preeti instanceof User);


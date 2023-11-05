let myName = "Preeti     ";

Object.prototype.trueLength = function(){
    console.log(this);
  return this.trim().length
}

console.log(myName.trueLength());

const myHeros = ["thor", "superman"];
const heroPower = {
    thor: "hammer",
    superman: "sling",
    getSpiderPower: function(){
        console.log(`Superman power is ${this.superman}`);
    }
}

Object.prototype.preeti = function(){
    console.log(`Preeti is present`);
}

heroPower.preeti();
myHeros.preeti();

Array.prototype.heyPreeti = function(){
    console.log(`Preeti in array`);
}

// heroPower.heyPreeti();
myHeros.heyPreeti();


//inheritance

const User = {
    name: "Preeti",
    email: "preeti@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSuport = {
    available : true
}

const TASupport = {
    makeAssignment : "JS",
    fullTime: true,
    __proto__ : TeachingSuport
}

Teacher.__proto__ = User;

//modern syntax

Object.setPrototypeOf(TeachingSuport, Teacher)
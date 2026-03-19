// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

//        this keyword does not work arrow functions  
//        because it refers to window object

console.log(this);

const person1 = {
    firstname: "Rai Kashif",
    lastname: "Ali",
    age: 34,
    isEmployed: true,
    sayHello: function(){
        console.log(`hi i am ${this.firstname} a programmer`);
    }
}

console.log(person1.firstname);
person1.sayHello();
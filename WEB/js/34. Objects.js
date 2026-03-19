// Object = A collection of related properties and methods
//          Can represent real word objects(people, products, places)

//          Objects are stored as reference
//          Object = {key: value,
//                    function();}

const person1 = {
    firstname: "Rai Kashif",
    lastname: "Ali",
    age: 34,
    isEmployed: true,
    sayHello: () => {
        console.log("hi i am a programmer");
    }
}

console.log(person1.firstname);
person1.sayHello();
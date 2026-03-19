// Nested Objects = Objects inside of other objects.
//                  Allow you to represent more complex data structures
//                  Child Object is enclosed by the parent object

//                  Person{Adress{}, ContactInfo{}}
//                  ShopingCart{Keyboard{}, Mouse{}, Monitor{}}

const person1 = {
    firstname: "Rai Kashif",
    lastname: "Ali",
    age: 21,
    hobbies: ["Reading","Writing","Swimming"],
    address: {
        city: "More Khunda",
        district: "Nankana Sahib",
        country: "Pakistan",
    }
}
// console.log(person1.firstname);
// console.log(person1.lastname);
// console.log(person1.age);
// console.log(person1.hobbies);
// console.log(person1.address);

for (const property in person1.address) {
    console.log(person1.address[property]);
}
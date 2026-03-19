// static = keyword that defines properties or methods
//          that belong to a class itself rather than 
//          the objects created from that class
//          (class owns anything static, not the objects) 

// class mathUtilities {
//     static PI = 3.14159;
//     static getDiameter(radius){
//         return radius * 2;
//     }
//     static getCircumference(radius){
//         return radius* this.PI * 2;
//     }
// }
// console.log(mathUtilities.PI);
// console.log(mathUtilities.getDiameter(3));
// console.log(mathUtilities.getCircumference(3));

class User{
    static userCount = 0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }
}
const user1 = new User("Rai");
const user2 = new User("Kashif");
const user3 = new User("Ali");
const user4 = new User("Ali");
const user5 = new User("Ali");
console.log(user1);
console.log(user2);
console.log(user3);

console.log(User.userCount);
// super = keyword is used in classes to call the constructor or
//         access the properties and methods of a parent (superclass)
//         this = this.object
//         super = the parent

class Animal {

    constructor(name,age){
        this.name = name;
        this.age = age;
    } 

    move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}km/h.`);
    }
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`This ${this.name} is running.`);
        super.move(this.runSpeed);
    }
    
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} is swimming.`);
        super.move(this.swimSpeed);
    }
    
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
    }
    fly(){
        console.log(`This ${this.name} is flying.`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit",12,60);
const fish = new Fish("fish",8,35);
const hawk = new Hawk("hawk",25,200);

// console.log(rabbit);
// console.log(fish);
// console.log(hawk);

rabbit.run();
fish.swim();
hawk.fly();
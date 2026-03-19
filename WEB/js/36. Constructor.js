// CONSTRUCTOR = special method for defining the 
//               properties and methods of objects 

function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){
        console.log(`You are driving the ${this.model}`);
    }
}

const car1 = new Car("Toyota","Fortuner",2023,"red");
car1.drive();
console.log(car1);
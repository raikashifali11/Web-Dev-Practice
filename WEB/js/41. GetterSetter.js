// setter = special method that makes a property writeable
// getter = special method that makes a property readable

// validate and modify a value when reading/writing a property
 
class Rectangle{

    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    set width(newWidth){
        if (newWidth>0) {
            this._width = newWidth;
        } else {
            console.error("Width must be a positive number");
        }
    }
    set height(newHeight){
        if (newHeight>0) {
            this._height = newHeight;
        } else {
            console.error("Height must be a positive number");
        }
    }
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
    get area(){
        return this._height * this.width;
    }
}
const rectangle1 = new Rectangle(3,4);


console.log(rectangle1.width);
console.log(rectangle1.height);
console.log(rectangle1.area);
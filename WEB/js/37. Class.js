// class = (ES6 feature) provides a more structured and cleaner
//         way to work with objects compared to traditional 
//         constructor functions
//         ex. static keyword, encapsulation, inheritance

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }
}

const product1 = new Product("shirt",50);
const product2 = new Product("shoes",100);
const product3 = new Product("pant",120);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();
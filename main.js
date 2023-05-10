// // Answer to the question number : 1

// polymorphism is a part of object-oriented programming languages. It means  many faces and it happen when we have many classes that are related to each other by inheritance

// // Answer to the question number : 2

// // prototypes:

// prototype means it's a system for javascript object inherit property from another object.

// // prototype chain:

// Every object in javascript has a prototype , when a method is access on prototype , javascript will first look for that property on the object it self ,  If it not found , it will search its prototype, this process hapen untill its prototype found or the upper top prototype . This process is called prototype Chain .

// Answer to the question number : 3

// 1st constructor function

function Dog(name, color) {
  this.name = name;
  this.color = color;
}

// Declare function in 1st constructor function

Dog.prototype.greet = function () {
  return `Hello ${this.name}`;
};

// 2nd constructor function

function Cat(name, color) {
  Dog.call(this, name, color);
}

// connect two constructor function

Cat.prototype = Object.create(Dog.prototype);

// Declare function in 2nd constructor function

Cat.prototype.getColor = function () {
  return `${this.name} color is ${this.color}`;
};

// create child in constructor function

const germanShefard = new Dog("shefard", "Black");

const persianCat = new Cat("maww", "white");

// console.log(germanShefard.greet());
// console.log(persianCat.getColor());
// console.log(persianCat.greet());
console.log(germanShefard.getColor());

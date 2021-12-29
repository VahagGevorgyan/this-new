"use strict";

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (someFood) {
  if (typeof someFood === "string") {
    this.stomach.push(someFood);
  } else {
    return "the food no edible";
  }
};
Person.prototype.poop = function () {
  this.stomach = [];
};
Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};
const p1 = new Person("Samuel", 24);

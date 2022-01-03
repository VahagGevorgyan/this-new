"use strict";
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function () {
  return `"Playing with ${this.favoriteToy} being the favorite toy.`;
};

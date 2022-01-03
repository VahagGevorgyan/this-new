"use strict";

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.odometer = 0;
  this.tank = 0;
}

Car.prototype.fill = function (gallons) {
  this.odometer += gallons;
};
Car.prototype.drive = function (distance) {
  const canDriveDistance = this.tank * this.milesPerGallon;
  if (canDriveDistance === 0) {
    return "I cant drive, as I am out of fuel";
  }
  this.odometer += distance <= canDriveDistance ? distance : canDriveDistance;
  this.tank -=
    distance <= canDriveDistance
      ? this.tank - Math.round(distance / this.milesPerGallon)
      : this.tank;
  return `I ran out of fuel at ${this.tank * this.milesPerGallon} miles `;
};

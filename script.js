function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getMakeModel = function () {
  return this.make + " " + this.model;
};

function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit from Car
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// For testing
window.Car = Car;
window.SportsCar = SportsCar;
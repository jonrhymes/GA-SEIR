////////////////
// Class Factory

class Car {
    constructor (maker, serialNumber) {
      this.serialNumber = serialNumber;
      this.maker = maker
    }
    drive () {
      console.log('Vroom Vroom');
    }
  }
const newCar = new Car('Mazda', 12345);
console.log(newCar);


class Factory {
    constructor (company) {
      this.company = company;
      this.cars = [];
    }
    generateCar () {
      const newCar = new Car(this.company, this.cars.length);
      this.cars.push(newCar);
    }
    generateManyCars (num) {
        for(let i = 0; i < num ; i++){
            this.generateCar();
        }
    }
    findCar (index) {
      return this.cars[index];
    }
  }
  const tesla = new Factory('Tesla');
  console.log(tesla)
  tesla.generateCar()
  console.log(tesla)
  tesla.generateCar()
  console.log(tesla)
  const chevy = new Factory('Chevy')
  chevy.generateCar()
  console.log(chevy)
  
 Factory.prototype.generateCar('New Car')

console.log(Factory.colors())
console.log(Math.random())
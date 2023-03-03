//1]Class->

// A JavaScript class is not an object.

// It is a template for JavaScript objects.

class Car {
  constructor(fname, tyear) {
    this.name = fname;
    this.year = tyear;
  }

  //Function
  Details(){
    console.log(`My Name is ${this.name}. This is the year of ${this.year}.`)
  }
}

const car =new Car("Dhanashri",1995);//object1
car.Details();

const car1 = new Car("Ganesh",1991);//object2
car1.Details();

//-----------------------------------------------------------------------------------------------------------------------


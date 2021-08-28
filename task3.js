

class CoffeeMake {
  on() {
    console.log('On');
  }
  off() {
    console.log(`Off`);
  }
}

class Drip extends CoffeeMake {
  drip() {
    console.log(`Drip`);
  }
}


class Carob extends CoffeeMake {
  carob() {
    console.log(`Carob`);
  }
}

class Machine extends CoffeeMake {
  machine() {
    console.log(`Machine`);
  }
}

let variable = new Drip();
console.log(variable);
variable.on();
variable.off();
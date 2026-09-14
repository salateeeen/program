
class Account {
  local = navigator.language;
  //!private feild
  #movements = [];
  #pin;

  constructor(name, currency, pin) {
    this.name = name;
    this.currency = currency;
    this.#pin = pin;
  }
  Diposit(mov) {
    this.#movements.push(mov);
    return this;
  }
  Withdraw(mov) {
    this.#movements.push(-mov);
    return this;
  }
  //!private method
  #isApproved(mov) {
    return true;
  }
  loan(mov) {
    if (this.#isApproved(mov)) {
      this.Diposit(mov);
    }
    return this;
  }
  get Movements() {
    return this.#movements;
  }
  getMovements() {
    return this.#movements;
  }
}

const sultan = new Account(`sultan`, `EUR`, 1234);
sultan.Diposit(100);
sultan.Withdraw(150);
sultan.loan(300);

const sultanMovements = sultan
  .Diposit(250)
  .Withdraw(100)
  .loan(300)
  .Movements;

console.log(sultan);
console.log(sultanMovements);

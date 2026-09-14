'use strict';
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  movementsDates: [
    '2025-01-18T21:31:17.178Z',
    '2025-02-01T07:42:02.383Z',
    '2025-02-04T09:15:04.904Z',
    '2025-01-30T10:17:24.185Z',
    '2025-01-23T14:11:59.604Z',
    '2025-02-03T17:01:17.194Z',
    '2025-02-02T23:36:17.929Z',
    '2025-01-11T10:51:36.790Z',
  ],
  interestRate: 1.2, // %
  pin: 1111,
  type: `premium`,
  local: `pt-PT`,
  currency: `EUR`
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  movementsDates: [
    '2025-01-18T21:31:17.178Z',
    '2025-02-01T07:42:02.383Z',
    '2025-01-11T10:51:36.790Z',
    '2025-02-04T09:15:04.904Z',
    '2025-01-30T10:17:24.185Z',
    '2025-02-03T17:01:17.194Z',
    '2025-01-23T14:11:59.604Z',
    '2025-02-02T23:36:17.929Z',
  ],
  interestRate: 1.5,
  pin: 2222,
  type: `standard`,
  local: `en-US`,
  currency: `USD`
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  movementsDates: [
    '2025-01-18T21:31:17.178Z',
    '2025-01-30T10:17:24.185Z',
    '2025-02-04T09:15:04.904Z',
    '2025-02-01T07:42:02.383Z',
    '2025-02-03T17:01:17.194Z',
    '2025-01-23T14:11:59.604Z',
    '2025-01-11T10:51:36.790Z',
    '2025-02-02T23:36:17.929Z',
  ],
  interestRate: 0.7,
  pin: 3333,
  type: `premium`,
  local: `ar-JO`,
  currency: `JOR`
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90, 150],
  movementsDates: [
    '2025-02-01T07:42:02.383Z',
    '2025-01-30T10:17:24.185Z',
    '2025-01-23T14:11:59.604Z',
    '2025-02-03T17:01:17.194Z',
    '2025-01-11T10:51:36.790Z',
  ],
  interestRate: 1,
  pin: 4444,
  type: `basic`,
  local: `en-cr`,
  currency: `GBP`
};
const accounts = [account1, account2, account3, account4];

// Elements
const Lable = {
  labelWelcome: document.querySelector('.welcome'),
  labelDate: document.querySelector('.date'),
  labelMovementsDate: document.querySelector('.movements__date'),
  labelBalance: document.querySelector('.balance__value'),
  labelSumIn: document.querySelector('.summary__value--in'),
  labelSumOut: document.querySelector('.summary__value--out'),
  labelSumInterest: document.querySelector('.summary__value--interest'),
  labelTimer: document.querySelector('.timer'),
}

const Container = {
  containerApp: document.querySelector('.app'),
  containerMovements: document.querySelector('.movements'),
}

const Button = {
  btnLogin: document.querySelector('.login__btn'),
  btnTransfer: document.querySelector('.form__btn--transfer'),
  btnLoan: document.querySelector('.form__btn--loan'),
  btnClose: document.querySelector('.form__btn--close'),
  btnSort: document.querySelector('.btn--sort')
}

const Input = {
  inputLoginUsername: document.querySelector('.login__input--user'),
  inputLoginPin: document.querySelector('.login__input--pin'),
  inputTransferTo: document.querySelector('.form__input--to'),
  inputTransferAmount: document.querySelector('.form__input--amount'),
  inputLoanAmount: document.querySelector('.form__input--loan-amount'),
  inputCloseUsername: document.querySelector('.form__input--user'),
  inputClosePin: document.querySelector('.form__input--pin')
}


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const EurToUsd = function (movements) {
  const eurTOusd = 1.1;
  const movInUsd = movements.map(function (mov) {
    return Math.trunc(mov * eurTOusd);
  });
  return movInUsd;
};

const computingUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.userName = account.owner
      .toLowerCase()
      .split(` `)
      .map(function (currentAccount) {
        return currentAccount.at(0);
      }).join(``);
  });
};
computingUsernames(accounts);


const Dates = {

  optionsDate: {
    // hour: `numeric`,
    // minute: `numeric`,
    day: `2-digit`,
    month: `2-digit`,
    // month: `numeric`,
    year: `numeric`,
    weekday: `short`,
  },

  daysPasses(date) {
    const timeDamped = Date.now() - new Date(date).getTime()
    return Math.round(timeDamped / (1000 * 60 * 60 * 24))
  },

  formatDays(date, account) {
    if (this.daysPasses(date) === 0)
      return `today`;
    else if (this.daysPasses(date) === 1)
      return `yesterday`;
    else if (this.daysPasses(date) < 7)
      return `${this.daysPasses(date) - 1} days ago`;
    else
      return this.formatNewDate(date, account)
  },

  formatNewDate(date, account) {
    return new Intl.DateTimeFormat(account.local, this.optionsDate).format(new Date(date))
  },

  formatNowDate(account) {
    return new Intl.DateTimeFormat(account.local, this.optionsDate).format(new Date())
  },

  IsosNowDate() {
    return new Date().toISOString()
  },
}

const Num = {
  optionsNum: {
    style: `currency`,
    currency: `GBP`,
  },

  movFormated(value, account) {
    const option = this.optionsNum;
    option.currency = account.currency;
    return new Intl.NumberFormat(account.local, this.optionsNum).format(value)
  }
}

const depositOfAccounts = function (account) {
  account.deposit = account?.movements.filter(function (mov) {
    return mov > 0;
  })
}

const WithdrawaOfAccounts = function (account) {
  account.withdrawa = account?.movements?.filter(function (mov) {
    return mov < 0;
  })
}

const Balance = {
  balanceMovements(account) {
    account.balanceMovements = account?.movements.reduce(function (acc, cur) {
      return Number((acc + cur).toFixed(2));
    }, 0)
  },

  balanceDeposit(account) {
    account.balanceDeposit = account?.deposit?.reduce(function (acc, cur) {
      return Number((acc + cur).toFixed(2));
    }, 0)
  },

  balanceWithdrawa(account) {
    account.balanceWithdrawa = account?.withdrawa.reduce(function (acc, cur) {
      return Number((acc + cur).toFixed(2));
    }, 0)
  },

  balanceIntrest(account) {
    account.intrest = account?.deposit
      .map(function (dep) {
        return (dep * account.interestRate) / 100;
      })
      .filter((cur) => cur >= 1)
      .reduce(function (acc, cur) {
        return Number((acc + cur).toFixed(2));;
      }, 0)
  }
}

const maxMin = {
  maxValue(account) {
    account.max = account.movements.reduce(function (acc, cur) {
      return acc > cur ? acc : cur;
    })
  },
  minValue(account) {
    account.min = account.movements.reduce(function (acc, cur) {
      return acc < cur ? acc : cur;
    })
  }
}

const balance = function (account) {
  depositOfAccounts(account);
  WithdrawaOfAccounts(account);
  Balance.balanceMovements(account);
  Balance.balanceDeposit(account);
  Balance.balanceWithdrawa(account);
  Balance.balanceIntrest(account);
  maxMin.maxValue(account);
  maxMin.minValue(account);
}

const Display = {
  displayMovements(account) {
    Container.containerMovements.innerHTML = ``;

    account?.movements.forEach(function (mov, i) {
      const type = mov > 0 ? `deposit` : `withdrawal`;
      mov = type === `deposit` ? mov : Math.abs(mov);
      // mov = mov - Math.round(mov) === 0 ? mov : mov.toFixed(2)

      const html = `<div class="movements__row">
      <div class="movements__type movements__type--${type}">
      ${i + 1} ${type}</div>
      <div class="movements__date">${Dates.formatDays(account.movementsDates[i], account)}</div>
      <div class="movements__value">${Num.movFormated(mov, account)}</div>
      </div>`;

      Container.containerMovements.insertAdjacentHTML(`afterbegin`, html);
      // console.log(Container.containerMovements);
    });
  },

  displaySumIntrest(account) {
    Lable.labelSumInterest.textContent = `${Num.movFormated(account?.intrest, account)}`;
  },

  displaySumDeposit(account) {
    Lable.labelSumIn.textContent = `${Num.movFormated(account?.balanceDeposit, account)}`;
  },

  displaySumWithdrawa(account) {
    Lable.labelSumOut.textContent = `${Num.movFormated(Math.abs(account?.balanceWithdrawa), account)}`;
  },

  displaySumOfMovements(account) {
    Lable.labelBalance.textContent = `${Num.movFormated(account?.balanceMovements, account)}`;
  }
}


const display = function (account) {
  Display.displayMovements(account);
  Display.displaySumOfMovements(account);
  Display.displaySumDeposit(account);
  Display.displaySumWithdrawa(account);
  Display.displaySumIntrest(account);
  Button.btnSort.innerHTML = `<button class="btn--sort">&uparrow; SORT</button>`
};


const UI = {
  appearUI() {
    Container.containerApp.style.opacity = 1;
  },
  hideUI() {
    Container.containerApp.style.opacity = 0;
  }
}


let curAccount;
let sortNum = 0;
const BUTTON = {
  Login: Button.btnLogin.addEventListener(`click`, function (e) {
    e.preventDefault();

    curAccount = accounts.find(function (account) {
      return Input.inputLoginUsername.value === account.userName;
    })
    if (Number(Input.inputLoginPin.value) === curAccount?.pin) {

      Lable.labelWelcome.textContent = `welcom ${curAccount.owner.split(` `)[0]}`;
      Input.inputLoginUsername.value = Input.inputLoginPin.value = ``;
      Input.inputLoginUsername.placeholder = Input.inputLoginPin.placeholder = ``;

      Lable.labelDate.textContent = Dates.formatNowDate(curAccount);

      UI.appearUI()
      balance(curAccount);
      display(curAccount);
      timer();
    }
  }),

  Transfer: Button.btnTransfer.addEventListener(`click`, function (e) {
    e.preventDefault();

    // curAccount.withdrawa.push(Number(-inputTransferAmount.value));
    curAccount.movements.push(-Number(Input.inputTransferAmount.value));

    const accountToTransfer = accounts.find(function (account) {
      return account.userName === Input.inputTransferTo.value;
    })

    // accountToTransfer.deposit.push(Number(inputTransferAmount.value));
    accountToTransfer.movements.push(Number(Input.inputTransferAmount.value));

    Input.inputTransferTo.value = Input.inputTransferAmount.value = ``
    //! same object that call him
    balance(curAccount);
    balance(accountToTransfer);

    curAccount.movementsDates.push(Dates.IsosNowDate());
    accountToTransfer.movementsDates.push(Dates.IsosNowDate());
    console.log(curAccount);


    display(curAccount);
  }),

  Loan: Button.btnLoan.addEventListener(`click`, function (e) {

    e.preventDefault();
    setTimeout(function () {
      curAccount.movements.push(Number(Input.inputLoanAmount.value));

      balance(curAccount);

      curAccount.movementsDates.push(Dates.IsosNowDate());

      display(curAccount);

      Input.inputLoanAmount.value = ``;
    }, 3000)
  }),

  Close: Button.btnClose.addEventListener(`click`, function (e) {
    e.preventDefault();

    if (curAccount &&
      curAccount.userName === Input.inputCloseUsername?.value &&
      Number(Input.inputClosePin.value) === curAccount?.pin) {

      const curIndexAccount = accounts.findIndex(function (account) {
        return account === curAccount;
      })
      accounts.splice(curIndexAccount, 1)

      UI.hideUI()
    };
  }),

  Sort: Button.btnSort.addEventListener(`click`, function (event) {
    event.preventDefault();
    const combined = combinedMovDate(curAccount)
    const sort = {};
    sort.local = curAccount.local;
    sort.currency = curAccount.currency;

    if (sortNum % 3 === 0) {
      const sA = sortingAsscending(combined);
      sort.movements = Grouping.groupingMov(sA);
      sort.movementsDates = Grouping.groupingDate(sA);
      Button.btnSort.innerHTML =  `<button class="btn--sort">&downarrow; SORT</button>`
      Display.displayMovements(sort);

    } else if (sortNum % 3 === 1) {
      const sD = sortingDescending(combined);
      sort.movements = Grouping.groupingMov(sD);
      sort.movementsDates = Grouping.groupingDate(sD);
      Button.btnSort.innerHTML =  `<button class="btn--sort">&rlarr; SORT</button>`
      Display.displayMovements(sort)

    } else if (sortNum % 3 === 2) {
      Display.displayMovements(curAccount);
      Button.btnSort.innerHTML = `<button class="btn--sort">&uparrow; SORT</button>`
    }
    sortNum++;
  })
}

const combinedMovDate = function (account) {
  const combinedMovDate = account.movements.map(function (mov, i) {
    return {
      movements: mov,
      movementsDates: account.movementsDates[i]
    }
  })
  return combinedMovDate;
}

const sortingAsscending = function (combined) {
  const sortingAsscending = combined.toSorted(function (a, b) {
    return a.movements - b.movements;
  })
  return sortingAsscending;
}
const sortingDescending = function (combined) {
  const sortingDescending = combined.toSorted(function (a, b) {
    return b.movements - a.movements;
  })
  return sortingDescending;
}

const Grouping = {
  groupingMov(combined) {
    const movements = combined.map(function (combined) {
      let { movements } = combined;
      return movements;
    })
    return movements;
  },
  groupingDate(combined) {
    const Date = combined.map(function (combined) {
      let { movementsDates } = combined;
      return movementsDates;
    })
    return Date;
  }
}

const timer = function () {
  let timer = new Date(1000 *15 * 60);
  
  const option = {
    minute: `2-digit`,
    second: `2-digit`
  }
  const clearTimer = setInterval(function () {
    Lable.labelTimer.textContent = new Intl.DateTimeFormat(`en-us`, option).format(timer);
    if(timer === 0){
      clearInterval(clearTimer);
      UI.hideUI();
    }
    timer -= new Date(1000);
  }, 1000);
}

const setTimer = function(){
  const option = {
    minute: `2-digit`,
    second: `2-digit`
  }
  Lable.labelTimer.textContent = new Intl.DateTimeFormat(`en-us`, option).format(new Date(15 * 1000))
}
setTimer()


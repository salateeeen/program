'use strict';
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  interestRate: 1.2, // %
  pin: 1111,
  type: `premium`,
  local: `pt-PT`
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  interestRate: 1.5,
  pin: 2222,
  type: `standard`,
  local: `en-US`
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  interestRate: 0.7,
  pin: 3333,
  type: `premium`,
  local: `ar-JO`
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
  ],
  interestRate: 1,
  pin: 4444,
  type: `basic`,
  local: `en-cr`

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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]


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


// console.log(new Intl.DateTimeFormat(`en-us`).format('2019-11-18T21:31:17.178Z'));


const DATE = {

  optionsDate: {
    // hour: `numeric`,
    // minute: `numeric`,
    day: `2-digit`,
    month: `2-digit`,
    year: `numeric`,
    // weekday: `long`,
  },
  howMuchDayaccept(date) {
    const timeDamped = Date.now() - date.getTime()
    console.log(new Date(date.getTime()));
    return new Date(timeDamped).getDate();
  },

  howMuchDay(day) {
    if (day < 7)
      return `${day - 1} day ago`;
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
      return acc + cur;
    }, 0)
  },

  balanceDeposit(account) {
    account.balanceDeposit = account?.deposit?.reduce(function (acc, cur) {
      return acc + cur;
    }, 0)
  },

  balanceWithdrawa(account) {
    account.balanceWithdrawa = account?.withdrawa.reduce(function (acc, cur) {
      return acc + cur;
    }, 0)
  },

  balanceIntrest(account) {
    account.intrest = account?.deposit
      .map(function (dep) {
        return (dep * account.interestRate) / 100;
      })
      .filter((cur) => cur >= 1)
      .reduce(function (acc, cur) {
        return acc + cur;
      }, 0)
  }
}
const maxValue = function (account) {
  account.max = account.movements.reduce(function (acc, cur) {
    return acc > cur ? acc : cur;
  })
}

const minValue = function (account) {
  account.min = account.movements.reduce(function (acc, cur) {
    return acc < cur ? acc : cur;
  })
}
const balance = function (account) {
  depositOfAccounts(account);
  WithdrawaOfAccounts(account);
  Balance.balanceMovements(account);
  Balance.balanceDeposit(account);
  Balance.balanceWithdrawa(account);
  Balance.balanceIntrest(account);
  maxValue(account);
  minValue(account);
}

const Display = {
  displayMovements(account) {
    Container.containerMovements.innerHTML = ``;

    account?.movements?.forEach(function (mov, i) {
      const type = mov > 0 ? `deposit` : `withdrawal`;
      mov = type === `deposit` ? mov : Math.abs(mov);

      const html = `<div class="movements__row">
      <div class="movements__type movements__type--${type}">
      ${i} ${type}</div>
      <div class="movements__date">${DATE.formatNewDate(account.movementsDates[i], account)}</div>
      <div class="movements__value">${mov}</div>
      </div>`;

      Container.containerMovements.insertAdjacentHTML(`afterbegin`, html);
    });
  },

  displaySumIntrest(account) {
    Lable.labelSumInterest.textContent = `${account?.intrest}$`;
  },

  displaySumDeposit(account) {
    Lable.labelSumIn.textContent = `${account?.balanceDeposit}$`;
  },

  displaySumWithdrawa(account) {
    Lable.labelSumOut.textContent = `${Math.abs(account?.balanceWithdrawa)}$`;
  },

  displaySumOfMovements(account) {
    Lable.labelBalance.textContent = `${account?.balanceMovements}$`;
  }
}


const display = function (account) {
  Display.displayMovements(account);
  Display.displaySumOfMovements(account);
  Display.displaySumDeposit(account);
  Display.displaySumWithdrawa(account);
  Display.displaySumIntrest(account);
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
Button.btnLogin.addEventListener(`click`, function (e) {
  e.preventDefault();

  curAccount = accounts.find(function (account) {
    return Input.inputLoginUsername.value === account.userName;
  })
  if (Number(Input.inputLoginPin.value) === curAccount?.pin) {

    Lable.labelWelcome.textContent = `welcom ${curAccount.owner.split(` `)[0]}`;
    Input.inputLoginUsername.value = Input.inputLoginPin.value = ``;
    Input.inputLoginUsername.placeholder = Input.inputLoginPin.placeholder = ``;

    Lable.labelDate.textContent = DATE.formatNowDate(curAccount);

    UI.appearUI()
    balance(curAccount);
    display(curAccount);
  }
})


Button.btnTransfer.addEventListener(`click`, function (e) {
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

  curAccount.movementsDates.push(DATE.IsosNowDate());
  accountToTransfer.movementsDates.push(DATE.IsosNowDate());
  console.log(curAccount);


  display(curAccount);
})

Button.btnLoan.addEventListener(`click`, function (e) {

  e.preventDefault();

  curAccount.movements.push(Number(Input.inputLoanAmount.value));

  Input.inputLoanAmount.value = ``
  
  balance(curAccount);
 
  curAccount.movementsDates.push(DATE.IsosNowDate());

  display(curAccount);

})

Button.btnClose.addEventListener(`click`, function (e) {
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
})

const calcOverallBalance = function (accounts) {
  const OverallBalance = accounts.flatMap(function (account) {
    return account.movements;
  }).reduce(function (acc, cur) {
    return acc + cur;
  }, 0)
  return OverallBalance;
}
calcOverallBalance(accounts);


const sortingAsscending = function (account) {
  const sortingAsscending = account.movements.toSorted(function (a, b) {
    return a - b;
  })
  return sortingAsscending;
}


const sortingDescending = function (account) {
  const sortingDescending = account.movements.toSorted(function (a, b) {
    return b - a;
  })
  return sortingDescending;
}

let sortNum = 0;
Button.btnSort.addEventListener(`click`, function (event) {
  const sort = {};
  sort.movementsDates = curAccount.movementsDates;
  event.preventDefault();
  if (sortNum % 3 === 0) {
    sort.movements = sortingAsscending(curAccount);
    Display.displayMovements(sort);
  } else if (sortNum % 3 === 1) {
    sort.movements = sortingDescending(curAccount);
    Display.displayMovements(sort)
  } else if (sortNum % 3 === 2) {
    Display.displayMovements(curAccount);
  }
  sortNum++;
})



const groupingDeposittWithdrawa = function (account) {
  const groupingDeposittWithdrawa = Object.groupBy(account.movements, function (movements) {
    if (movements > 0) return `deposit`;
    if (movements < 0) return `withdrawal`;
  })
  return groupingDeposittWithdrawa;
}
// console.log(groupingDeposittWithdrawa(account1));

const groupingByType = function (accounts) {
  const groupingByType = Object.groupBy(accounts, function (account) {
    return account.type;
  })
  return groupingByType;
}
// console.log(groupingByType(accounts));
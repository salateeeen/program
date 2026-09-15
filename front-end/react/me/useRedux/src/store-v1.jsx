import { createStore } from "redux";

const initialAccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: ``,
};

function accountReducer(state = initialAccountState, action) {
  switch (action.type) {
    case `account/deposit`: {
      return { ...state, balance: state.balance + action.payload };
    }
    case `account/withdraw`: {
      return { ...state, balance: state.balance - action.payload };
    }
    case `account/requestLoan`: {
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
      };
    }
    case `account/payLoan`: {
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: ``,
      };
    }
    default:
      return state;
  }
}

function deposit(amount) {
  return { type: `account/deposit`, payload: amount };
}
function withdraw(amount) {
  return { type: `account/withdraw`, payload: amount };
}
function requestLoan(amount, purpose) {
  return {
    type: `account/requestLoan`,
    payload: { amount, purpose },
  };
}
function payLoan() {
  return { type: `account/payLoan` };
}
const store = createStore(accountReducer);

store.dispatch(deposit(300));
console.log(store.getState());

store.dispatch(requestLoan(1000, `by a car`));
console.log(store.getState());

store.dispatch();
console.log(store.getState(payLoan()));

export default store;

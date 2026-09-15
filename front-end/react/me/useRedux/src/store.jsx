import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: ``,
};

function accountReducer(state = initialState, action) {
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
        loanPurpose:``
      };
    }
    default:
      return state;
  }
}

const store = createStore(accountReducer);

store.dispatch({ type: `account/deposit`, payload: 300 });
console.log(store.getState());

store.dispatch({
  type: `account/requestLoan`,
  payload: { amount: 1000, purpose: `by a car` },
});
console.log(store.getState());

store.dispatch({type:`account/payLoan`})
console.log(store.getState());

export default store;

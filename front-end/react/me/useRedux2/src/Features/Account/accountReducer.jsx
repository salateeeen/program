const initialAccountState = {
  Balance: 0,
  Loan: 0,
  LoanPurpose: ``,
  isLoading: false,
};

function accountReducer(state = initialAccountState, action) {
  switch (action.type) {
    case `account/deposit`: {
      return {
        ...state,
        Balance: state.Balance + action.payload,
        isLoading: false,
      };
    }
    case `account/withdraw`: {
      return { ...state, Balance: state.Balance - action.payload };
    }
    case `account/requestLoan`: {
      return {
        ...state,
        Balance: state.Balance + action.payload.amount,
        Loan: action.payload.amount,
        LoanPurpose: action.payload.purpose,
      };
    }
    case `account/payLoan`: {
      return {
        ...state,
        Balance: state.Balance - state.Loan,
        Loan: 0,
        LoanPurpose: ``,
      };
    }
    case `account/convertingCurrency`: {
      return {
        ...state,
        isLoading: true,
      };
    }
    default:
      return state;
  }
}

export default accountReducer;

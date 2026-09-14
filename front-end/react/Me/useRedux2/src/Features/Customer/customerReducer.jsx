const initialCustomerState = {
  Name: ``,
  Id: ``,
};

function customerReducer(state = initialCustomerState, action) {
  switch (action.type) {
    case `customer/createAccount`: {
      return {
        ...state,
        Name: action.payload.name,
        Id: action.payload.id,
      };
    }
    case `customer/updateName`: {
      return { ...state, Name: action.payload };
    }
    default :
    return state
  }
}

export default customerReducer;

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

export function getCustomer(state) {
  return state.customer
}

/// you can do anything after select any state
/// even if array methods
export function getFullName(lastName) {
  return function (state) {
    return state.customer.Name + ` ` + lastName
  }
}

export default customerReducer;

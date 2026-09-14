import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "../Features/Account/accountReducer";
import customerReducer from "../Features/Customer/customerReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store
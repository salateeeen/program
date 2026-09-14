import accountReducer from "../Features/Account/accountSlice";
import customerReducer from "../Features/Customer/customerReducer";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer:{
    account: accountReducer,
    customer : customerReducer
  }
})

export default store
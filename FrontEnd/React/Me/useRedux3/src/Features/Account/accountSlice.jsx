import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  Balance: 0,
  Loan: 0,
  LoanPurpose: ``,
  isLoading: false,
  status: `idle`,
  position: ``,
  error: ``,
};

// export const fetchPosition = createAsyncThunk(`account/fetchPosition`, function () {
//   /// return the payload for a function
//   return new Promise(function (res, rej) {
//     window.navigator.geolocation.getCurrentPosition(res, rej);
//   });
// });

export const fetchPosition = createAsyncThunk(
  "account/fetchPosition",
  async () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          resolve({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          }),
        (err) => reject(err)
      );
    });
  }
);

const accountSlice = createSlice({
  name: `account`,
  initialState,
  reducers: {
    deposit(state, action) {
      state.Balance += action.payload;
    },

    withdraw(state, action) {
      state.Balance -= action.payload;
    },

    requestLoan: {
      ///for more than one payload
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },

      reducer(state, action) {
        state.Balance += action.payload.amount;
        state.Loan = action.payload.amount;
        state.LoanPurpose = action.payload.purpose;
      },
    },

    payLoan(state, action) {
      state.Balance -= state.Loan;
      state.Loan = 0;
      state.LoanPurpose = ``;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchPosition.pending, (state, action) => {
        state.status = `loading`;
      })
      .addCase(fetchPosition.fulfilled, (state, action) => {
        state.status = `idle`;
        state.position = action.payload;
      })
      .addCase(fetchPosition.rejected, (state, action) => {
        state.status = `error`;
        state.error = `error MSG`;
      }),
});

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;
export default accountSlice.reducer;

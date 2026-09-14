export function deposit(amount, currency) {
  console.log(currency);
  if (currency === `USD`) {
    return { type: `account/deposit`, payload: amount };
  }

  return async function (dispatch, getState){
    dispatch({type: `account/convertingCurrency`})
    for (let index = 0; index < 100000; index++) {}
    const res = await fetch(
      `https://api.frankfurter.dev/v1/latest?amount=${amount}&base=${currency}&symbols=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    dispatch({ type: `account/deposit`, payload: converted });
  };
}

export function withdraw(amount) {
  return { type: `account/withdraw`, payload: amount };
}

export function requestLoan(amount, purpose) {
  return {
    type: `account/requestLoan`,
    payload: { amount, purpose },
  };
}
export function payLoan() {
  return { type: `account/payLoan` };
}

import { useDispatch, useSelector } from "react-redux";
import {
  deposit,
  withdraw,
  requestLoan,
  payLoan,
} from "./accountSlice";
import { useState } from "react";
import { getCustomer, getFullName } from "../Customer/customerReducer";

function Account() {
  const [depositAmount, setDepositAmount] = useState(``);
  const [withdrawAmount, setWithdrawAmount] = useState(``);
  const [loan, setLoan] = useState(``);
  const [loanPurpose, setLoanPurpose] = useState(``);
  const [currency, setCurrency] = useState(`USD`);

  const dispatch = useDispatch();

  const { Balance, Loan, LoanPurpose, isLoading } = useSelector(
    (store) => store.account
  );

  /// useSelector call the function with pass the curState
  const { Name } = useSelector(getCustomer);

  const fullName  = useSelector(getFullName(`omar`));

  function handleDeposit(e) {
    e.preventDefault();
    if (!depositAmount) return;
    dispatch(deposit(depositAmount, currency));
    setDepositAmount(``);
    setCurrency(`USD`);
  }

  function handleWithdraw(e) {
    e.preventDefault();
    if (!withdrawAmount) return;
    dispatch(withdraw(withdrawAmount));
    setWithdrawAmount(``);
  }

  function handleRequestLoan(e) {
    e.preventDefault();
    if (!(loan && loanPurpose)) return;
    dispatch(requestLoan(loan, loanPurpose));
    setLoan(``);
    setLoanPurpose(``);
  }

  function handlePayLoan(e) {
    if (Balance <= 0) return;
    dispatch(payLoan());
    e.preventDefault();
  }

  return (
    <>
      <div>
        <p>my name is {Name}</p>
        <p>Balance: {Balance}</p>
        <p>Loan: {Loan}</p>

        <form>
       <p>{isLoading? `converting currency...` : `Deposit: ${depositAmount}`}</p>
          <input
            type="text"
            value={depositAmount}
            onChange={(e) => setDepositAmount(Number(e.target.value))}
          />

          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <span>
            {" "}
            <button onClick={(e) => handleDeposit(e)} disabled={isLoading}>
              X
            </button>{" "}
          </span>
        </form>

        <form>
          <p>withdraw: {withdrawAmount}</p>
          <input
            type="text"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(Number(e.target.value))}
          />
          <span>
            {" "}
            <button onClick={(e) => handleWithdraw(e)}>X</button>{" "}
          </span>
        </form>

        <form>
          <p>loan: {loan}</p>
          <input
            type="text"
            value={loan}
            onChange={(e) => setLoan(Number(e.target.value))}
          />
          <input
            type="text"
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
          />
          <span>
            {" "}
            <button onClick={(e) => handleRequestLoan(e)}>X</button>
          </span>
        </form>

        <div>
          <span>PayLoan</span>{" "}
          <button onClick={(e) => handlePayLoan(e)}>X</button>{" "}
        </div>
      </div>
    </>
  );
}

export default Account;

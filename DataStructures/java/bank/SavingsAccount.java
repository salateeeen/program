public class SavingsAccount extends BankAcount {
    private double interest;

    SavingsAccount(Customer customer, double interest){
        super(customer);
        this.interest = interest;
    }
    public void addInterest(){
       double interest = balance * this.interest / 100;
        balance +=interest;
        addTransaction(new Transaction("INTEREST", interest));

    }
    
    public void deposit(double deposit) {
        this.balance += deposit;
        addTransaction(new Transaction("DEPOSIT", deposit));
    }

    public void withdraw(double withdraw) {
        if (this.balance <= withdraw) {
            System.out.println("error the balance is:" + balance);
        } else {
            this.balance -= withdraw;
        }
        addTransaction(new Transaction("WITHDRAW", withdraw));
    }
}
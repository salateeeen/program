public class InvestmentAccount extends BankAcount{
    private  double fees;

    public InvestmentAccount(Customer customer, double fees) {
        super(customer);
        this.fees = fees;
    }
    @Override public String toString(){
        return super.toString() + " fees:" + fees;
    }
}

public class BankAcount {
    protected double balance;
    protected Customer customer;
    private Transaction[] transactions;
    private int transactionsCount;
    private int transactionsMax;
    public BankAcount(Customer customer) {
        this.customer = customer;
        this.balance = 0;
        transactionsCount = 0;
        transactionsMax = 50;
        transactions = new Transaction[transactionsMax];
    }
    void addTransaction(Transaction transaction){
        if (!isFull()) {
            transactions[transactionsCount] = transaction;
            transactionsCount++;
        } else System.out.println("sorry is full!");
    }

    public int getTransactionsCount() {
        return transactionsCount;
    }

    public boolean isFull(){
        return transactionsCount == transactionsMax;
     }
     public boolean isEmpty(){
        return transactionsCount == 0;
     }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public double getBalance() {
        return balance;
    }

    @Override
    public String toString() {
        return customer.toString() + " balance:" + balance;
    }

}

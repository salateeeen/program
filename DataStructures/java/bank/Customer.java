public class Customer{
    protected String ownerName;
    protected int accountNumber;
    protected static int nextAccountNumber = 1;
    Customer(String ownerName ,String accountNumber ){
        this.ownerName = ownerName;
        this.accountNumber = nextAccountNumber;
        updateAccountNumber();
    }
    public void updateAccountNumber() {
        nextAccountNumber++;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public void setAccountNumber(int accountNumber) {
        this.accountNumber = accountNumber;
    }
    
    public int getAccountNumber() {
        return accountNumber;
    }

    public String getOwnerName() {
        return ownerName;
    }
    @Override public String toString() {
        return "OwnerName:" + ownerName + "  accountNumber:" + accountNumber  ;
    }
    

}
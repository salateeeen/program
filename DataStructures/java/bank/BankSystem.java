
    public class BankSystem {
    public static void main(String[] args) {
        Customer john = new Customer("John Doe", "12345");
        SavingsAccount johnsAccount = new SavingsAccount(john, 2.5);
        johnsAccount.deposit(200);
        johnsAccount.withdraw(100);
        johnsAccount.addInterest();
        System.out.println(johnsAccount.getBalance());
        System.out.println(johnsAccount.getTransactionsCount());
        
    }
}


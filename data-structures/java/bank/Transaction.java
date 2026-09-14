public class Transaction {
    protected String type;
    protected double amount;
    Transaction(String type, double amount){
        this.type = type;
        this.amount = amount;
    }
    public double getAmount() {
        return amount;
    }
    public String getType() {
        return type;
    }
    @Override
    public String toString() {
        return "type:" + type + " amount:" + amount;
    }
    
}
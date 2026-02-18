public class Main {
    public static void main(String[] args) {
        LOT lot = new LOT();
        lot.insert(45);
        lot.insert(15);
        lot.insert(79);
        lot.insert(90);
        lot.insert(10);
        lot.insert(55);
        lot.insert(12);
        lot.insert(20);
        lot.insert(50);
        lot.preOrder();
        lot.inOrder();
        lot.postOrder();
        lot.leveOrder();
        System.out.println(lot.getRoot());
    }
}
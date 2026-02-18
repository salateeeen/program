public class Main {

    public static void main(String[] args) {
        DoublyLinkedList d = new DoublyLinkedList();
        d.insertToLast(1);
        d.insertToLast(2);
        d.insertToLast(3);
        d.insertToLast(4);
        d.insertToLast(5);
        // d.insertToLast(6);
        System.out.println(d.getMid());
}
}
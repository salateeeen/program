public class Main{
    public static void main(String[] args) {
        LinkedList <Integer> l = new LinkedList<>();
        l.insertToFirst(1);
        l.insertToFirst(2);
        l.insertToFirst(3);
        l.insertToFirst(4);
        l.insertToFirst(5);
        l.removeAtElement(5);
        l.printLinkedList();


        LinkedList <String> l1 = new LinkedList<>();
        l1.printLinkedList();
        l1.insertToFirst("sultan");
        l1.insertToFirst("omar");
        l1.insertToFirst("zaid");
        l1.insertToFirst("asal");
        l1.insertToFirst("elias");
        l1.printLinkedList();
    };
};
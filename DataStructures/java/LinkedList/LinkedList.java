
public class LinkedList<T> {

    private Node<T> first;
    private Node<T> last;
    private int length;

    public LinkedList() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    public boolean isEmpty() {
        return length == 0;
    }

    public void insertToFirst(T element) {
        Node<T> newNode = new Node<>();
        newNode.item = element;
        if (isEmpty()) {
            first = last = newNode;
            last.next = null;
        } else {
            newNode.next = first;
            first = newNode;
        }
        length++;
    }

    public void insertToLast(T element) {
        Node<T> newNode = new Node<>();
        newNode.item = element;
        if (isEmpty()) {
            first = last = newNode;
            last.next = null;
        } else {
            last.next = newNode;
            last = newNode;
            last.next = null;
        }
        length++;
    }

    public void removeFromFirst() {
        if (isEmpty()) {
            System.out.println("is empty cant remove");
        } else if (length == 1) {
            first = last = null;
            length--;
        } else {
            first = first.next;
            length--;
        }
    }

    public void removeFromLast() {
        if (isEmpty()) {
            System.out.println("is empty cant remove");
        } else if (length == 1) {
            first = last = null;
            length--;
        } else {
            Node<T> cur = first;
            while (cur.next != last) {
                cur = cur.next;
            }
            last = cur;
            last.next = null;
            length--;
        }
    }

    public void removeAtElement(T item) {
        if (isEmpty()) {
            System.out.println("is empty cant remove");
        } else if (first.item.equals(item)) {
            removeFromFirst();
        } else if (last.item.equals(item)) {
            removeFromLast();
        } else {
            Node<T> cur = first.next;
            Node<T> prv = first;
            while (!cur.item.equals(item)) {
                cur = cur.next;
                prv = prv.next;
            }
            prv.next = cur.next;
            cur = v
            dnull;
            length--;
        }
    }

    public int search(T element) {
        Node<T> cur = first;
        int pos = 0;
        if (isEmpty()) {
            return 0;
        } else {
            while (cur != null) {
                if (cur.item.equals(element)) {
                    return pos;
                }
                pos++;
                cur = cur.next;
            }
        }
        return -1;

    }

    public void printLinkedList() {
        Node<T> cur = first;
        while (cur != null) {
            System.out.print(cur.item + " ");
            cur = cur.next;
        }
        System.out.println();
    }
}

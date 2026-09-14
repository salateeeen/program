
public class DoublyLinkedList {

    private int length;
    private DoublyNode first;
    private DoublyNode last;

    public DoublyLinkedList() {
        this.length = 0;
        this.first = null;
        this.last = null;
    }

    public void insertToFirst(int item) {
        DoublyNode newNode = new DoublyNode();
        newNode.item = item;
        if (isEmpty()) {
            first = last = newNode;
            first.prev = null;
            first.next = null;
        } else {
            newNode.next = first;
            first.prev = newNode;
            first = newNode;
            newNode.prev = null;
        }
        length++;
    }

    public void insertToLast(int item) {
        DoublyNode newNode = new DoublyNode();
        newNode.item = item;
        if (isEmpty()) {
            first = last = newNode;
            last.prev = null;
            last.next = null;
        } else {
            newNode.prev = last;
            last.next = newNode;
            last = newNode;
            newNode.next = null;
        }
        length++;
    }

    public void insertAtPos1(int item, int pos) {
        DoublyNode newNode = new DoublyNode();
        newNode.item = item;
        if (isEmpty()) {
            first = last = newNode;
            first.prev = null;
            last.next = null;
        } else if (pos == 0) {
            insertToFirst(item);
        } else if (pos == length - 1) {
            insertToLast(item);
        } else {
            DoublyNode cur = first;
            int count = 0;
            for (int i = 0; i != pos - 1; i++) {
                cur = cur.next;
                count++;
            }
            cur.next.prev = newNode;
            newNode.next = cur.next;
            cur.next = newNode;
            newNode.prev = cur;
            length++;
            System.out.println(count);
        }
    }

    public void insertAtPos2(int item, int pos) {
        DoublyNode newNode = new DoublyNode();
        newNode.item = item;
        if (isEmpty()) {
            first = last = newNode;
            first.prev = null;
            last.next = null;
        } else if (pos == 0) {
            insertToFirst(item);
        } else if (pos == length - 1) {
            insertToLast(item);
        } else if (pos <= length / 2) {
            DoublyNode cur = first;
            int count = 0;
            for (int i = 0; i != pos - 1; i++) {
                cur = cur.next;
                count++;
            }
            cur.next.prev = newNode;
            newNode.next = cur.next;
            cur.next = newNode;
            newNode.prev = cur;
            length++;
            System.out.println(count);
        } else if (pos > length / 2) {
            DoublyNode cur = last;
            int count = 0;
            for (int i = 0; i != length - pos; i++) {
                cur = cur.prev;
                count++;
            }
            cur.next.prev = newNode;
            newNode.next = cur.next;
            cur.next = newNode;
            newNode.prev = cur;
            length++;
            System.out.println(count);
        }
    }

    public void removeFromFirst() {
        if (isEmpty()) {
            System.out.println("is already empty");
        } else if (length == 1) {
            first = last = null;
            length--;
        } else {
            first = first.next;
            first.prev = null;
            length--;
        }
    }

    public void removeFromLast() {
        if (isEmpty()) {
            System.out.println("is already empty");
        } else if (length == 1) {
            first = last = null;
            length--;
        } else {
            last = last.prev;
            last.next = null;
            length--;
        }
    }

    public void removeAtElement(int item) {
        if (isEmpty()) {
            System.out.println("is already empty");
        } else if (first.item == item || length == 1) {
            if (first.item == item) {
                removeFromFirst();
            } else {
                System.out.println("the element cant found");
            }
        } else if (last.item == item) {
            removeFromLast();
        } else {
            DoublyNode cur = first.next;
            while (cur != last) {
                if (cur.item == item) {
                    cur.prev.next = cur.next;
                    cur.next.prev = cur.prev;
                    length--;
                    return;
                }
                cur = cur.next;
            }
            System.out.println("the element cant found");
        }
    }

    public int search(int element) {
        DoublyNode cur = first;
        int pos = 0;
        if (isEmpty()) {
            return 0;
        } else {
            while (cur != null) {
                if (cur.item == element) {
                    return pos;
                }
                pos++;
                cur = cur.next;
            }
        }
        return -1;
    }

    public int getMid() {
        DoublyNode curFirst = first;
        DoublyNode curLast = last;
        while (curFirst != curLast) {
            curFirst=curFirst.next;
            curLast=curLast.prev;
        }
        return curFirst.item;
       
    }

    public void printLinkdList() {
        DoublyNode cur = first;
        while (cur != null) {
            System.out.print(cur.item + "  ");
            cur = cur.next;
        }
        System.out.println();
    }

    public void printLinkdListReverse() {
        DoublyNode cur = last;
        while (cur != null) {
            System.out.print(cur.item + "  ");
            cur = cur.prev;
        }
        System.out.println();
    }

    public boolean isEmpty() {
        return length == 0;
    }

    public int getLast() {
        return last.item;
    }

    public int getFirst() {
        return first.item;
    }

    public int getLength() {
        return length;
    }

}

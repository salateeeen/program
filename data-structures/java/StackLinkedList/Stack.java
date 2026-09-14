

public class Stack<T> {

    Node<T> top;

    public Stack() {
        top = null;
    }

    public void push(T element) {
        Node<T> newNoode = new Node();
        newNoode.item = element;
        newNoode.next = top;
        top = newNoode;
    }

    public T pop() {
        T value = top.item;
        if (!isEmpty()) {
            top = top.next;
        } else {
            System.out.println("stack is empty");
            return null;
        }
        return value;
    }

    public boolean isEmpty() {
        return top == null;
    }

    public void printStack() {
        System.out.println("[ ");
        while (top != null) {
            System.out.println(top.item + " ");
            top = top.next;
        }
        System.out.println("]");
        System.out.println();
    }

    public void get() {
        System.out.println(top);
    }
};

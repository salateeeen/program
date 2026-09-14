
public class Stack {

    private int top;
    private int size;
    private int[] array;

    public Stack(int s) {
        size = s;
        top = -1;
        array = new int[size];
    }

    public boolean push(int element) {
        if (!isFull()) {
            array[++top] = element;
            return true;
        } else {
            return false;
        }
    }

    public void popAtElement(int element) {
        Stack s2 = new Stack(10);
        int count = 0;
        if (isEmpty()) {
            System.out.println("sorry the stack is empty");
        } else {
            while (count != top + 1) {
                if (array[count++] == element) {
                    s2.array[++top] = array[count];
                }
            }
        }
    }

    public boolean pop() {
        if (!isEmpty()) {
            top--;
            return true;
        } else {
            return false;
        }
    }

    public boolean pop(int element) {
        if (!isEmpty()) {
            element = array[top--];
            return true;
        } else {
            return false;
        }
    }

    public int getTop() {
        return array[top];
    }

    public void printTop() {
        System.out.println(array[top]);
    }

    public boolean isFull() {
        return size == top + 1;
    }

    public boolean isEmpty() {
        return top == -1;
    }

    public void printStack() {
        System.out.print("[");
        for (int i = top; i >= 0; i--) {
            if (i != 0) {
                System.out.print(array[i] + ", ");
            } else {
                System.out.print(array[i]);
            }
        }
        System.out.print("]");
        System.out.println();
    }

    public static void main(String[] args) {
        Stack s = new Stack(10);
        s.push(1);
        s.push(2);
        s.push(3);
        s.push(4);
        s.push(5);
        s.push(6);
        s.popAtElement(3);
        s.printStack();
    }
};

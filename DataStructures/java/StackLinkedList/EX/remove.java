


public class remove {

    public void removeValue(int value)
{
    Stack<Integer> stackTest = new Stack<>();
    stackTest.push(10);
    stackTest.push(6);
    stackTest.push(4);
    stackTest.push(1);
    stackTest.push(6);
    stackTest.push(5);

    Stack<Integer> temp = new Stack<Integer>();
    while (!stackTest.isEmpty())
    {
        int theTop = stackTest.pop();
        if (theTop != value)
        {
            temp.push(theTop);
        }
    }
    while (!temp.isEmpty())
    {
        stackTest.push(temp.pop());
    }
    stackTest.printStack();
}

    public static void main(String[] args) {
        Stack<Integer> s = new Stack<>();
        s.push(10);
        s.push(6);
        s.push(4);
        s.push(1);
        s.push(6);
        s.push(5);
        s.printStack();
        remove r = new remove();
        r.removeValue(6);
        // s.printStack();
    }
}

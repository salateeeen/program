#include <iostream>
#include <cmath>
#include "stackLinkedList.cpp"
#include "stack"
using namespace std;

void removeValue(Stack<int> stackTest, int value)
{

    Stack<int> temp;
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

int main()
{
    Stack<int> s;
    s.push(10);
    s.push(6);
    s.push(4);
    s.push(1);
    s.push(6);
    s.push(5);
    s.printStack();
    removeValue(s, 6);
    s.printStack();
}
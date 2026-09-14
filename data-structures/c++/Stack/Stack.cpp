#include <iostream>
#include <cmath>
using namespace std;

template <typename T>

class Stack
{
private:
    int top;
    int size;
    T *array;

public:
    Stack(int s)
    {
        size = s;
        top = -1;
        array = new T[size];
    }
    bool push(T &element)
    {
        if (!isFull())
        {
            array[++top] = element;
        }
        else
            false;
    }

    bool pop()
    {
        if (!isEmpty())
        {
            top--;
        }
        else
            false;
    }

    bool pop(T &element)
    {
        if (isEmpty())
        {
            element = array[top--];
        }
        else
            false;
    }
    T getTop()
    {
       return array[top];
    }
    void printTop()
    {
        cout<< array[top];
    }

    bool isFull()
    {
        return size == top + 1;
    }

    bool isEmpty()
    {
        return top == -1;
    }

    void printStack()
    {
        cout << "[";
        for (int i = top; i >= 0; i--)
        {
          i != 0 ? cout << array[i] << ", ": cout << array[i];
        }
        cout << "]";
        cout << endl;
    }
};

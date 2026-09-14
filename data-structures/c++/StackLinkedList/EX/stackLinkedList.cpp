#include <iostream>
#include <cmath>
using namespace std;

template <typename T>

class Stack
{
private:
    struct Node
    {
        T item;
        Node* next;
    };
    Node* top;
    
public:
    Stack()
    {
        top = NULL;
    }

    void push(T element)
    {
        Node* newNoode = new Node;
        newNoode->item=element;
        newNoode ->next = top;
        top = newNoode;
    }

    void pop(T &element)
    {
        if (!isEmpty())
        {
            Node* empty = new Node;
            empty = top;
            element = top ->item;
            top = top ->next;
            empty = empty ->next = NULL;
        }
        else "stack is empty";      
    }
    T pop()
    {
        if (!isEmpty())
        {
            Node *cur = top;
            T value = top->item;
            top = top->next;
            cur = NULL;
            return value;
        }
        else
            cout<< "stack is empty";
    }

    bool isEmpty()
    {
        return top == NULL;
    }

    void printStack()
    {
        cout << "[ ";
        while (top != NULL)
        {
            cout << top->item <<" ";
            top = top ->next; 
        }
        cout << "]";
        cout << endl;
    }
    void get (){
        cout<< top;
    }

};
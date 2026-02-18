#include <iostream>
#include <cmath>
using namespace std;

template <class T>

class DoublyLinkedList
{
private:
    struct Node
    {
        T item;
        Node *next;
        Node *prev;
    };
    Node *first;
    Node *last;
    int length;

public:
    DoublyLinkedList()
    {
        first = NULL;
        last = NULL;
        length = 0;
    }

    void insertToFirst(T item)
    {
        Node *newNode = new Node;
        newNode->item = item;
        if (isEmpty())
        {
            first = last = newNode;
            first->next = NULL;
            first->prev = NULL;
        }
        else
        {
            newNode->next = first;
            first->prev = newNode;
            first = newNode;
            first->prev = NULL;
        }
        length++;
    }

    void insertToLast(T item)
    {
        Node *newNode = new Node;
        newNode->item = item;
        if (isEmpty())
        {
            last = first = newNode;
            last->next = NULL;
            last->prev = NULL;
        }
        else
        {
            newNode->prev = last;
            last->next = newNode;
            last = newNode;
            last->next = NULL;
        }
        length++;
    }

    void insertAtPos(int pos, T item)
    {
        Node *newNode = new Node;
        Node *cur = first;
        newNode->item = item;
        if (pos < 0 || pos > length)
        {
            cout << "out of range" << endl;
        }
        else if (pos == 0)
        {
            insertToFirst(item);
        }
        else if (pos == length)
        {
            insertToLast(item);
        }
        else
        {
            for (int i = 0; i < pos - 1; i++)
            {
                cur = cur->next;
            }
            newNode->next = cur->next;
            newNode->prev = cur;
            newNode->next->prev = newNode;
            newNode->prev->next = newNode;
            length++;
        }
    }

    void removeFromFirst()
    {
        if (isEmpty())
        {
            cout << "dose not have a items to remove" << endl;
        }
        else if (length == 1)
        {
            first = last = NULL;
            length--;
        }
        else
        {
            Node *cur = first;
            first = first->next;
            first->prev = NULL;
            cur = NULL;
            length--;
        }
    }

    void removeFromLast()
    {
        if (isEmpty())
        {
            cout << "dose not have a items to remove" << endl;
        }
        else if (length == 1)
        {
            first = last = NULL;
            length--;
        }
        else
        {
            Node *cur = last;
            last = last->prev;
            last->next = NULL;
            cur = NULL;
            length--;
        }
    }

    void removeAtElement(T element)
    {
        Node *cur = first;
        if (isEmpty())
        {
            cout << "dose not have a items to remove" << endl;
        }
        else if (first->item == element)
        {
            removeFromFirst();
        }
        else if (last->item == element)
        {
            removeFromLast();
        }
        else
        {
            Node *cur = first;
            while (cur->item != element)
            {
                cur = cur->next;
                if(cur == NULL){
                    cout<<"the element cant found"<<endl;
                    return;
                }
            }
            cur->next->prev = cur->prev;
            cur->prev->next = cur->next;
            cur == NULL;
            length--;
        }
    }

     //! الREVERSE بال doubly عالفاضي اصلا 
    void reverse()
    {

        if (isEmpty())
        {
            cout << "dose not have a items to reverse" << endl;
        }
        else
        {
            Node *prev = NULL;
            Node *cur = first;
            Node *next = first->next;
            while (cur != NULL)
            {
                next = cur->next;
                cur->prev = next;
                cur->next = prev;
                prev = cur;
                cur = next;
            }
            last = first;
            first = prev;
        }
    }

    int search(T element)
    {
        Node *cur = first;
        int pos = 0;
        while (cur != NULL)
        {
            if (cur->item == element)
            {
                return pos;
            }
            cur = cur->next;
            pos++;
        }
        return -1;
    }

    bool isEmpty()
    {
        return length == 0;
    }

    void printStackReverse()
    {
        Node *cur = last;
        cout << "[ ";
        while (cur != NULL)
        {
            cout << cur->item << " ";
            cur = cur->prev;
        }
        cout << "]";
        cout << endl;
    }

    void printStack()
    {
        Node *cur = first;
        cout << "[ ";
        while (cur != NULL)
        {
            cout << cur->item << " ";
            cur = cur->next;
        }
        cout << "]";
        cout << endl;
    }
    int getLength()
    {
        return length;
    }
    void printNULL()
    {
        cout << "first->prev:" << first->prev << "\tlast->next:" << last->next << endl;
    }
};

int main()
{
    DoublyLinkedList<int>d;
    d.insertToFirst(1);
    d.insertToFirst(2);
    d.insertToFirst(3);
    d.insertToFirst(4);
    d.insertToFirst(5);
    d.insertToLast(6);
    d.printStack();
    d.removeAtElement(1);
    d.printStack();
}
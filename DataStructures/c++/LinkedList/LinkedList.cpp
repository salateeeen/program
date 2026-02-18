#include <iostream>
#include <cmath>
using namespace std;

template <typename T>

class LinkedList
{
private:
    struct Node
    {
        T item;
        Node *next;
    };
    Node *first;
    Node *last;
    int length;

public:
    LinkedList()
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
        }
        else
        {
            newNode->next = first;
            first = newNode;
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
        }
        else
        {
            last->next = newNode;
            newNode->next = NULL;
            last = newNode;
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
                newNode->next = cur->next;
                cur->next = newNode;
            }
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
            cur = cur->next = NULL;
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
            Node *cur = first->next;
            Node *prv = first;
            while (cur != last)
            {
                //! for(int i=1; i<length; i++)
                cur = cur->next;
                prv = prv->next;
            }
            last = prv;
            delete cur;
            last->next = NULL;
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
            Node *cur = first->next;
            Node *prv = first;
            // todo هون اليوينتر بوقف بس اوصل الكرنت الي بدي اياه
            while (cur->item != element)
            {
                cur = cur->next;
                prv = prv->next;
            }
            prv->next = cur->next;
            cur == NULL;
            length--;
        }
    }

 void reverse()
    {

        if (isEmpty())
        {
            cout << "dose not have a items to reverse" << endl;
        } else{
            Node *prv = NULL;
            Node *cur = first;
            Node *next = first->next;
            // تحقق ثم عدل لا تعدل ثم تتحقق
            while (cur != NULL)
            { 
                next = cur->next;
                cur->next = prv;
                prv = cur;
                cur = next;
            }
             last = first;
             first = prv;
        }
    }
 
    int search(T element){
        Node* cur = first;
        int pos = 0;
        while (cur != NULL)
        {
             if (cur->item == element){
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

    void getFirst()
    {
        cout << first << endl;
    }
    void getAdsFirst()
    {
        cout << &first << endl;
    }
};

int main()
{
    LinkedList<int> l;
    l.insertToFirst(1);
    l.insertToFirst(2);
    l.insertToFirst(3);
    l.insertToFirst(4);
    l.insertToFirst(5);
    l.printStack();
    l.reverse();
    l.getFirst();
    l.getAdsFirst();
    l.printStack();
}
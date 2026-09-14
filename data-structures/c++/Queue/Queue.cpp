#include <iostream>
using namespace std;

template <class T>
class Queue
{
private:
    int front;
    int rear;
    int length;
    int maxSize;
    T *array;

public:
    Queue(int max)
    {
        front = 0;
        length = 0;
        maxSize = max;
        rear  = maxSize -1;
        array = new T[maxSize];
    }
    int moveRear(){
       rear = (rear+ 1)% maxSize;
       return rear;
    }

    int moveFront(){
       front = (front + 1)% maxSize;
       return front;
    }

    void enQueue(T element){
        if (isFull())
        {
            cout<< "cant added queue is full.\n";
        } else {
            array[moveRear()] = element;
            length++;
        }
    }

    T deQueue(){
         if (isEmpty())
        {
            cout<< "cant remove queue is Empty.\n";
        } else{ 
            T temp = getFront();
            array[front] = NULL;
            moveFront();
            length--;
            }
            return temp;
    }

    T getRear(){
       return array[rear];
    }
    T getFront(){
       return array[front];
    }

    bool isEmpty(){
        return length = 0;
    }
    bool isFull(){
        return length == maxSize;
    }

    void printQueue()
    {
        cout<<"[";
        
        for (int i = front; i != rear; i= (i+1) % maxSize)
        {
             cout << array[i] << ", ";
        }
        cout << array[rear];
        cout<< "]";
        cout<<endl;
    }
    
    int search(T element)
    {
        int pos = front;
        int count = 0;
        while (element != array[pos])
        {
            pos= (pos+1)%maxSize;
            count++;
            if(count == length){
                return -1;
            }

        }
        return pos;
        
    }
};

int main()
{
    Queue<int> q(5);
    q.enQueue(1);
    q.enQueue(2);
    q.enQueue(3);
    q.enQueue(4);
    q.enQueue(5);
    q.deQueue();
    q.deQueue();
    q.enQueue(6);
    q.enQueue(7);
    q.printQueue();
    cout<< q.search(8);

}
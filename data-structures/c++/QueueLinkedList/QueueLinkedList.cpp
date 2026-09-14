#include <cmath>
#include <iostream>

using namespace std;

template <class T> class QueueLinkedList {
private:
  int size;
  struct Node {
    T item;
    Node *next;
  };
  Node *front;
  Node *rear;

public:
  QueueLinkedList() {
    size = 0;
    front = NULL;
    rear = NULL;
  }
  void enQueue(T element) {
    Node *newNode = new Node;
    newNode->item = element;

    if (isEmpty()) {
      front = rear = newNode;
      rear->next = NULL;
    } else {
      rear->next = newNode;
      rear = newNode;
      rear->next = NULL;
    }
    size++;
  }
  void deQueue() {
    if (isEmpty()) {
      cout << "the queue is already empty";
    } else if (size == 1) {
      front = rear = NULL;
      size--;
    } else {
      Node *cur = front;
      front = front->next;
      cur = NULL;
    }
      size--;
  }
  void print() {
    Node *cur = front;
    while (cur != NULL) {
      cout << cur->item;
      cur = cur->next;
    }
    cout<<endl;
  }

  bool isEmpty() {
     return size == 0; }

  int getSize() {
     return size; }
};

int main() {
  QueueLinkedList<int> q;
  q.enQueue(1);
  q.enQueue(2);
  q.enQueue(3);
  q.enQueue(4);
  q.enQueue(5);
  q.print();
  cout<< q.getSize();
}
#include <iostream>
#include <cmath>
#include "Queue.cpp"
using namespace std;

class Node
{
public:
    int data;
    Node *leftChild;
    Node *rightChild;

    Node()
    {
        data = 0;
        leftChild = NULL;
        rightChild = NULL;
    }

    Node(int item)
    {
        data = item;
        leftChild = NULL;
        rightChild = NULL;
    }
};

class LOT
{
private:
    Node *root;

public:
    LOT()
    {
        root = NULL;
    }
    Node *insert(Node *rootNode, int data)
    {
        if (rootNode == NULL)
        {
            Node *newNode = new Node(data);
            rootNode = newNode;
        }
        Queue<Node> queue(100);
        queue.enQueue(*root);

        while (!queue.isEmpty())
        {
            Node *current = &queue.deQueue();
            if (current->leftChild == nullptr)
            {
                insert(current->leftChild, data);
                break;
            } else
            {
                queue.enQueue(*current->leftChild);
            }
            if (current->leftChild == nullptr)
            {
                insert(current->rightChild, data);
                break;
            }
            else
            {
                queue.enQueue(*current->rightChild);
            }
        }

        if (rootNode->leftChild == nullptr)
        {
            rootNode->rightChild = insert(rootNode->rightChild, data);
        }
        else if (rootNode->rightChild == nullptr)
        {
            rootNode->leftChild = insert(rootNode->leftChild, data);
        }

        return rootNode;
    }
    void insert(int item)
    {
        root = insert(root, item);
    }

    void preOrder(Node *root)
    {
        if (root == NULL)
            return;

        cout << root->data << " ";
        preOrder(root->leftChild);
        preOrder(root->rightChild);
    }
    void preOrder()
    {
        preOrder(root);
        cout << endl;
    }

    void inOrder(Node *root)
    {
        if (root == NULL)
            return;
        inOrder(root->leftChild);
        cout << root->data << " ";
        inOrder(root->rightChild);
    }
    void inOrder()
    {
        inOrder(root);
        cout << endl;
    }

    void postOrder(Node *root)
    {
        if (root == NULL)
            return;

        postOrder(root->leftChild);
        postOrder(root->rightChild);
        cout << root->data << " ";
    }
    void postOrder()
    {
        postOrder(root);
        cout << endl;
    }
};

int main()
{
    LOT lot;
    lot.insert(45);
    lot.insert(15);
    lot.insert(79);
    lot.insert(90);
    lot.insert(10);
    lot.insert(55);
    lot.insert(12);
    lot.insert(20);
    lot.insert(50);
    lot.preOrder();
    lot.inOrder();
    lot.postOrder();
}
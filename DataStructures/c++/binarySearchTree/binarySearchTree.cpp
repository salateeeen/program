#include <iostream>
#include <cmath>
using namespace std;

class Node
{
public:
    int data;
    Node *leftChild;
    Node *rightChild;

    Node(int item)
    {
        data = item;
        leftChild = NULL;
        rightChild = NULL;
    }
};

class BST
{
private:
    Node *root;

public:
    BST()
    {
        root = NULL;
    }


    Node *insert(Node *rootNode, int data)
    {
        if (rootNode == NULL)
        {
            /// return to the first call because the tree is NULL
           /// and then return the recursive call to reach the node that is NULL
            rootNode = new Node(data);
            return rootNode;
        }
        else if (data > rootNode->data)
        {
            /// rightChild is a pointer to point new node when node is NULL
            rootNode->rightChild = insert(rootNode->rightChild /* to move to the node with rightChild == null */, data);
        }
        else if (data <= rootNode->data)
        {
            /// leftChild is a pointer to point new node when node is NULL
            rootNode->leftChild = insert(rootNode->leftChild/* to move to the node with leftChild == null */, data);
        }
        /// return the node that is not NULL of recursive call and last return is the root node
        cout << "rootNode->data: " << rootNode->data << endl;
        return rootNode;
    }

    void insert(int item)
    {
        root = insert(root, item);
    }
    int getRoot()
    {
        return root->data;
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

    bool search(Node *root, int data)
    {
        if (root == NULL)
        {
            return false;
        }
        else if (root->data == data)
        {
            return true;
        }
        else if (root->data >= data)
        {
           return search(root->leftChild, data);
        }
        else if (root->data < data)
        {
           return search(root->rightChild, data);
        }
    }
    bool search(int data)
    {
        return search(root, data);
    }
};

int main()
{
    BST bst;
    bst.insert(45);
    cout << bst.getRoot() << endl;
    bst.insert(15);
    cout << bst.getRoot() << endl;
    bst.insert(79);
    cout << bst.getRoot() << endl;
    bst.insert(90);
    cout << bst.getRoot() << endl;
    bst.insert(10);
    cout << bst.getRoot() << endl;
    bst.insert(55);
    cout << bst.getRoot() << endl;
    bst.insert(12);
    cout << bst.getRoot() << endl;
    bst.insert(20);
    cout << bst.getRoot() << endl;
    bst.insert(50);
    cout << bst.getRoot() << endl;

    bst.preOrder();
    bst.inOrder();
    bst.postOrder();
    string found = bst.search(12) ? "founded" : "not founded";
    cout << found;
}
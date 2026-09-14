
#include <iostream>
using namespace std;

class cls1
{
public:
   /* virtual */ void print()
    {
        cout << "class ONE" << endl;
    }
    virtual void print2()
    {
        cout << "class ONE" << endl;
    }
};

class cls2 : public cls1
{
public:
    virtual void print()
    {
        cout << "\nclass TWO" << endl;
    }
};

class cls3 : public cls2
{
public:
    void print()
    {
        cout << "\nclass THREE" << endl;
    }
    void print3()
    {
        cout << "class ONE" << endl;
    }
};

int main()
{

    cls2 *two = new cls2;
    cls1 *one = two;

    one->print();
    // two->print2();
    // two->print3();

    return 0;
}
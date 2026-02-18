
#include <iostream>
#include <cmath>
#include <string>

using namespace std;

class B;     // forward declaration
class A {
private:
    int data;
public:
    A() : data(12) { }
    friend int func(A, B*);   //friend function Declaration
};

class B {
private:
    int data;
public:
    B() : data(1) { }
    friend int func(A, B*);  //friend function Declaration
};


int func(A d1, B* d2)

{
    cout << "function F has the power to access the private data in both class A and B" << endl;
    if (d1.data > d2->data)
        return d1.data;
    else
        return d2->data;

}

int main()
{

    A a;
    B b;
    B* p = &b;
    cout << "Data: " << func(a, p);

    int t;
    cin >> t;
    return 0;
}

#include <iostream>
#include <string>
// static int counter= 0;
using namespace std;

class clsA
{
public:
    static int counter;
    static int initialisation()
    {
      return counter ;
    }
    int var;
    //! static int counter = 0;
    clsA()
    {
        counter++;
    }

    void Print()
    {
        cout << "\nvar = " << var << endl;
        cout << "counter = " << counter << endl;
    }
};

//& static variable initialisation outside the class
int clsA::counter main()
{
 clsA::initialisation();
    clsA A1;
    A1.var = 10;
    A1.Print();

    clsA A2;
    A2.var = 20;
    A2.Print();

    clsA A3;
    A3.var = 30;
    A3.Print();
 A1.counter = 500;
    cout << "\nafter chaning the static member counter in one object :\n ";

    A1.Print();
    A2.Print();
    A3.Print();
}

#include <iostream>
using namespace std;

class clsPerson
{
public:
   virtual void print()
    {
        cout <<"\nclass PERSON" << endl;
    }
};

class clsEmployee : public clsPerson
{
public:
     void print()
    {
        cout << "\nclass EMPLOYEE" << endl;
    }
};

class clsStudent : public clsEmployee
{
public:
    void print()
    {
        cout <<"\nclass STUDENT" << endl;
    }
};
int main()
{

    clsStudent *Student1 = new clsStudent;
    clsEmployee *Employee1 =new clsEmployee;
    
    clsPerson *Person1;

    Person1 = Employee1;
    Person1->print();
    
    Person1 = Student1;
    Person1->print();   

    return 0;
}
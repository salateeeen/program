#include <iostream>
#include <vector>
using namespace std;

int changeAFromRef(int &b)
{
    return b += 6;
}
int changeAFromPointer(int *b)
{
    return *b += 45;
}
int axisWithpointer(int *b)
{
    cout << "axisWithpointer():  " << b << " " << &b << " " << *b << endl
         << endl;

}

int main()
{
    int a = 5;

    /// b is the same of a
    //* b is (not addres) just deffrent name of a
    int &b = a;
    //! int &c = &a 'error'
    //? &b = b cant change the ref to new ref after run time (just once initalize);
    
    int *p = &a;
    /// p pointer to a
    //* creat a box in memmory to regest addres of a
    //? p = &b change the point of pointer after run time; 

    cout <<"same because b ref to a:   "<< &a << " " << &b << " " << p << endl;
    
    b = 3;
    cout << a << " " << b << " " << p << endl;
    
    //& the pointer enter to the box memmory of [a<->b] and axis variable and change
    *p = 27;
    cout << a << " " << b << " " << p << endl;
   
    changeAFromRef(a);
    cout << "changeAFromRef():  " << a << " " << b << " " << p << endl;
   
    changeAFromPointer(&a);
    cout << "changeAFromPointer():  " << a << " " << b << " " << p << endl;
   
    axisWithpointer(&b);

}
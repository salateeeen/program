/********************************************************* 
//INHERITANCE using multiple access specifier 
*********************************************************/

#include <iostream>
using namespace std;

class base {// BASE CLASS
public:
int x;
protected:
int y;
private:
int z;
};
class derived : public base {//DERIVED CLASS
public:
void member_function()
{
cout<<"Iam in a class that is inherited as public\n";
cout<<"I can access X \n";
cout<<"I can access Y \n";
cout<<"I can NOT access Z \n";
} };
class derived1 : protected base {//DERIVED CLASS
public:
void member_function()
{
cout<<"Iam in a class that is inherited as public\n";
cout<<"I can access X \n";
cout<<"I can access Y \n";
cout<<"I can NOT access Z \n";
} };
class derived2 : private base {//DERIVED CLASS
public:
void member_function()
{
cout<<"Iam in a class that is inherited as public\n";
cout<<"I can access X \n";
cout<<"I can access Y \n";
cout<<"I can NOT access Z \n";
} };
int main()
{
// what you can access here ???

base b;
b.x; // OK : puplic data Accessible here 
b.y; // Error : Can NOT access protected data 
b.z; // Error : Can NOT access private data 

derived d; // this derived is inherited as public
d.x; // OK : puplic data Accessible here 
d.y; // Error : Can NOT access protected data 
d.z; // Error : Can NOT access private data 

derived1 dd;
dd.x; // Error : Can NOT access protected data 
dd.y;// Error : Can NOT access protected data 
dd.z;// Error : Can NOT access private data

derived2 ddd;
ddd.x; // Error : Can NOT access private data
ddd.y; // Error : Can NOT access private data
ddd.z; // Error : Can NOT access private data

return 0;
}

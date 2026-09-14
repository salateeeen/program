/*************************************
// Virtual function and base pointer
*************************************/
#include<iostream>
#include<string>
using namespace std;

class base
{
bool check;
int var;
public:
base(){
check=rand()%2;
var = rand()%100;
cout<<"base default constructor\n";
}
base(bool a, int b)
{
var = a?a+b:a-b;
check=a;
cout<<"base constructor \n";

}
virtual void show ()
{
cout<<"Hello, The content of the base class"<<var<<"\t"<<check<<endl;
}
void sample()
{
cout<<"function belongs to the base class\n";
}

};

class derived : public base
{
int x;
int y;
public:
derived(){
x = rand()%100;
y = rand()%100;
cout<<"Derived default constructor\n";}
derived(int a,int b):x(a),y(b){cout<<"Derived constructor \n";}
void show ()//refine the body of the version in the base 
{
cout<<"Hello, The content of the derived class"<<x<<"\t"<<y<<endl;
}
void print()
{
cout<<"function belongs to the derived class\n";
}
};
class derived2 : public derived
{
bool variable1;
bool variable2;
public:
derived2(){
variable1 = rand()%2;
1 of 2
variable2 = rand()%2;
cout<<"Derived2 default constructor\n";}
derived2(bool a,bool b):variable1(a),variable2(b){cout<<"Derived2 constructor \n";}
void show ()//refine the body of the version in the base 
{
cout<<"Hello, The content of the second derived class"<<variable1<<"\t"<<variable2<<endl;
}
void test()
{
cout<<"function belongs to the derived 2\n";
}
};
int main()
{

base b_object;
derived d_object(1,10);
derived2 dd_object(true,false);

base *p = &b_object;//pointer to the base, can access all public base members
p->show();
p->sample();

p =&d_object;//base pointer to derived class, can access all members inherited from the base
//  p->print(); // syntax error ==> print is not a member in base so the base pointer can NOT access it
p->show();// will access the show function that exist in the base

p=&dd_object;
//	p->test(); // syntax error ==> test is not a member in base so the base pointer can NOT access it
//	p->print();// syntax error ==> print is not a member in base so the base pointer can NOT access it
p->show(); // will access the show function that exist in the derived

return 0;
}


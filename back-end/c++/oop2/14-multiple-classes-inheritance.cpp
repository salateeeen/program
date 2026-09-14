/**************************************************************
//Indirectly inheriting a base class multiple times  
***************************************************************/

#include<iostream>
#include<string>
using namespace std;


class B1 {
public:
int i;
int j;
void g(int) { }
};

class B2 {
public:
int j;
void g() { }
};

class D : public B1, public B2 {
public:
int i;
};


void main()
{	
D dobj;

dobj.j = 100; // this will not work because j is ambiguous
dobj.B1::j = 200; // this will work
dobj.B2::j = 300;// this will work
dobj.i = 400; // this works because i is local to D class and it is public
dobj.B1::i=500; // this works because i is public in B1 class 
dobj.g(1); //his will not work because g has two versions(ambiguous call)
dobj.g();//his will not work because g has two versions (ambiguous call)
dobj.B2::g(); // this will work, unambiguous call with correct parameter passing
dobj.B2::g(1);//this will not work since the version of g() that exists in B2 does not take arguments 
}

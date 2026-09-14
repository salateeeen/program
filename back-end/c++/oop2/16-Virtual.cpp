/**************************
//Virtual Base class
*************************/

#include<iostream>
#include<string>
#include<ctime>
using namespace std;


class B1 {
public:
	B1(int a, int b) :i(a), j(b) { cout << "Root class constructor is being called with " << a << b << endl; }
	B1() {}
	int i;
	int j;
	int fun();

};

class D1 :  virtual public B1
{
public:
	D1(int a) :k(a),B1(a,a) { cout << "Level 2 base class constructor is being called with " << a << endl; }
	D1() {}
	int k;
	//contains i , j , k
};

class D2 :  virtual public B1
{
public:
	D2(int b) :w(b),B1(b,b) { cout << "Level 2 base class constructor is being called with " << b << endl; }
	D2() {}
	int fun();
	int w;
	// contains i , j , w
};
class D3 : public D1, public D2 {
public:
	D3(){}
	D3(int a, int b) :i(a), f(b), D1(10),D2(20) { cout << "The derived class constructor is being called with " << a << b << endl; }
	int i;
	int f;
	// contains 3 copies of i (one as direct member), 2 copies of j, 1 copy of k , w f 
};


void main()
{
	D3 dobj(10,20);

	dobj.i = 400; //although 3 copies of i exist but one exist as a direct member tax

	dobj.D1::i = 500; //correct sytax ==> i is taken once from D1 and D2 no ambiguous versions 

	dobj.D2::i = 600; //correct sytax ==> i is taken once from D1 and D2 no ambiguous versions

	cout << dobj.i << endl; // 400
	cout << dobj.D1::i << endl;//600
	cout << dobj.D2::i << endl;//600

	dobj.j = 500;// virtual keyword allows only one copy of j to exist in D3 ==> correct syntax , no ambiguous versions

	cout << dobj.D2::j << endl;//500
	cout << dobj.D1::j << endl; //500
	
}

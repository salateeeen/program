/**************************************************************
// Indirectly inheriting a base class multiple times
***************************************************************/

#include<iostream>
#include<string>
#include<ctime>
using namespace std;


class B1 {
public:
	int i;
	int j;

};

class D1 : public B1
{
public:
	int k;
	//contains i , j , k
};

class D2 : public B1
{
public:
	int w;
	// contains i , j , w
};
class D3 : public D1, public D2 {
public:
	int i;
	int f;
	// contains 3 copies of i (one as direct member), 2 copies of j, 1 copy of k , w f 
};


void main()
{
	D3 dobj;
	dobj.f = 100; // single copy of f ==> not ambiguous 
	dobj.k = 200; // single copy of k ==> not ambiguous
	dobj.w = 300; // single copy of w ==> not ambiguous

	dobj.j = 500;// 2 copies of j ==> syntax error : ambiguous j

	dobj.i = 400; // although 3 copies of i exist but one exist as a direct member ==> correct sytax

	dobj.D1::i = 500; // correct sytax ==> not an ambiguous version 

	dobj.D2::i = 600;// correct sytax --> not an ambiguous version

	//if we correct the syntax error exist in the code the next cout statements will print
	cout << dobj.i << endl; // 400
	cout << dobj.D1::i << endl;//500
	cout << dobj.D2::i << endl;//600

}

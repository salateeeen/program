/***********************************************************
// THIS POINTER AND FUNCTIONS RETURNING REFERENCE TO OBJECTS
************************************************************/

#include <iostream>
using namespace std;

class A;
class B;

class B
{
	int b;
public:
	B(int y = 33) :b(y) { 	}
	B& set_b(int x)
	{
		b = x;
		cout << "class B \t" << this->b << endl;
		return *this;
	}
	A& set_b(char c)
	{
		b = c;
		cout << "class B \t" << this->b << endl;;
		return (A&)*this;
	}
	int getb(){return b;}
};

class A
{
	int a;
public:
	A(int w = 11) :a(w) { }
	A& set_a(int c)
	{
		a = c;
		cout << "class A \t" << a << endl;
		return *this;
	}
	B& set_a(char c)
	{
		a = c;
		cout << "class A \t" << a << endl;
		return (B&)*this;
	}
	void prina (){
	
		cout<< a;
	}
};

int main()
{
	A a_object;
	B b_object;

	a_object.set_a(1).set_a(2).set_a(3);
	cout<<"the a is yet to come";
	 a_object.prina();
	a_object.set_a(10).set_a('2').set_b(3);
	 cout<<"2 or 3 no one knows";

	a_object.prina();

	system("pause");
}

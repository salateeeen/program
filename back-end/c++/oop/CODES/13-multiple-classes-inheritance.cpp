/*********************************************************
//Multiple classes inheritance, passing values to base and
//derived constructors, constructors and destructors order
*********************************************************/

#include <iostream>
using namespace std;

class base1 {
public:
	base1() { cout << "Base1 Class Default Constructor \n"; }
	base1(int x, int y) :a(x), b(y) { cout << "Base Class Parameterized Constructor \n"; }
	~base1() { cout << "Destructing base1 \n"; }
private:
	int a, b;
};

class base2 {
public:
	base2() { cout << "Base2 Class Default Constructor \n"; }
	base2(bool a, bool b) :var1(a), var2(b) { cout << "Base2 Class Parameterized Constructor \n"; }
	~base2() { cout << "Destructing base2 \n"; }
private:
	int var1, var2;
};

class derived : public base1, public base2 {
public:
	derived()
	{
		cout << "Derived class with unintialized values\n";
	}
	derived(char one, char two, int five, int six) : x(one), y(two), base1(five, six)
	{
		cout << "Derived class used to initialize SOME variables\n";
	}
	derived(char one, char two, bool three, bool four, int five, int six) : x(one), y(two), base1(five, six), base2(four, three)
	{
		cout << "Derived class used to initialize ALL variables\n";
	}
	~derived() { cout << "Destructing derived \n"; }
private:
	int x, y;
};
int main()
{
	//case 1: no info is passed
	derived d;
	cout << "\n\n\n";

	//case 2: some info is passes
	derived d1('a', 'b', 1, 2);
	cout << "\n\n\n";

	//case 3: all info is passed
	derived d2('a', 'b', 0, 1, 10, 20);
	cout << "\n\n\n";

	return 0;
}


/*********************************************
// STATIC data members and member functions
*********************************************/

#include <iostream>
using namespace std;

class ABC
{
public:
	ABC(int x) :object_num(x) { }
	void increase() { shared_var++; }

	void print()
	{
		// this is a non-static function that can access static and non-static data members
		cout << "Object " << object_num << " with shared variable: " << shared_var << endl;
	}

	static void  static_print()
	{
		// this is a static function that can access static data members only
		cout << "shared variable: " << shared_var << endl;
	}

private:
	int object_num;
	static int shared_var;
};

int ABC::shared_var = 100; // static data member initializer , static data members can't be initialized by the constructor

int main()
{
	ABC A(0);
	ABC AB(1);

	A.increase();
	A.print();
	AB.increase();
	AB.print();

	ABC::static_print(); // note how we call the static member function
	int t;
	cin >> t;
	return 0;
}

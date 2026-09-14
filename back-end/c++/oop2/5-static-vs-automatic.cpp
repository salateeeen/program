/******************************************
// STATIC vs AUTOMATIC OBJECTS
***************************************/
#include <iostream>
using namespace std;

int i = 1;
class test
{
public:
	test(int x) { // parameterized constructor
		object_num = x;
		cout << "object with ID " << object_num << " created" << endl;
	}
	~test()
	{
		cout << "object with ID " << object_num << " destroyed" << endl;
	}
private:
	int object_num;
};

void create_ob()
{
	static test T2(20); // STATIC LOCAL OBJECT
	test T3(i); // AUTOMATIC LOCAL OBJECT

}
test T0(0); // STATIC GLOBAL OBJECT 

int main()
{
	static test T1(10); // STATIC LOCAL OBJECT
	for (; i < 3; i++)
		create_ob();

	return 0;
}

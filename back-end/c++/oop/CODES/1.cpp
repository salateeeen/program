
#include <iostream>
#include <cmath>
using namespace std;

class point
{

	float x;
	float y;

public:
	point() : x(1), y(1) // non paramerterized constructor
	{
		cout << "non paramerterized constructor initialized x to 1 and y to 1 " << endl;
	}
	point(float a, float b) : x(a), y(b) // paramerterized constructor
	{
		cout << "paramerterized constructor initialized x to " << a << " and y to: " << b << endl;
	}
	float distance_origin();
	void show_xy()
	{
		cout << "The value of x is : " << x << "the value of y is :" << y << endl;
	}

	~point()
	{
		cout << "the point (onject) with x = " << x << "and y = " << y << "is exiting" << endl;
	}

	float getthex()
	{
		return x;
	}

	float setthex(float m)
	{
		return x = m;
	}
};

float point::distance_origin()
{
	return sqrt(pow(x, 2) + pow(y, 2));
}

point p1;

void test_function()
{
	point p2(4, 10);
}

int main()
{

	point p4;
	p4.setthex(3);
	cout << "/n YOUR X " << p4.getthex();

	getchar();

	return 0;
	system("PAUSE");
}

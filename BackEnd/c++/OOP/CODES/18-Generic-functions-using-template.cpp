/************************************
// Generic functions using template
*************************************/

#include <iostream>
#include <string>
using namespace std;

template <typename T>

void sum(T* p, int start, int end)
{
	T grand_sum = 0;
	for (int i = start; i < end; i++)
		grand_sum += p[i];
	cout << "The sum of the elements from " << start << " to " << end << " is " << grand_sum << endl;
}

//T could be used as a generic typename again
template <typename X, typename Y>

void display_elements(X a, Y b)
{
	cout << "a is: " << a << " b is: " << b << endl;
}

int main()
{
	int int_array[10] = { 1,3,5,7,9,11,13,15,17,19 };
	double double_array[10] = { 0.5,0.25,1.75,9.5,8.3,12.2,5.0,1.1 };
	sum(int_array, 2, 7);
	sum(double_array, 2, 7);

	display_elements(true, 'e');
	display_elements(3.5, "This is a test string");

	return 0;
}

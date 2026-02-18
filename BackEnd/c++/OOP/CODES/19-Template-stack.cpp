/*******************************
// Generic Class using template
*******************************/

#include<iostream>
#include<string>
using namespace std;

template< typename T >
class Stack {

public:
	Stack(int = 10);  // default constructor (stack size 10)
	~Stack() { delete[] stackPtr; }
	bool push(const T&);
	bool pop(T&);
	bool isEmpty() { return top == -1; }
	bool isFull() { return top == size - 1; }

private:
	int size;
	int top;
	T* stackPtr; // pointer to stack elements
};
template< typename T >
Stack< T >::Stack(int s)
{
	size = s > 0 ? s : 10;
	top = -1;
	stackPtr = new T[size];
}

template< typename T >
bool Stack< T >::push(const T& pushValue)
{
	if (!isFull()) {
		stackPtr[++top] = pushValue;
		return true;
	}
	return false;
}

template< typename T >
bool Stack< T >::pop(T& popValue)
{
	if (!isEmpty()) {
		popValue = stackPtr[top--];
		return true;
	}
	return false;
}

void main()
{
	Stack< double > doubleStack(5);
	double doubleValue = 1.1;

	cout << "Pushing elements onto doubleStack\n";

	while (doubleStack.push(doubleValue)) {
		cout << doubleValue << ' ';
		doubleValue += 1.1;

	}

	cout << "\nStack is full. Cannot push " << doubleValue
		<< "\n\nPopping elements from doubleStack\n";

	while (doubleStack.pop(doubleValue))
		cout << doubleValue << ' ';

	cout << "\nStack is empty. Cannot pop\n";

	Stack< int > intStack;
	int intValue = 1;
	cout << "\nPushing elements onto intStack\n";

	while (intStack.push(intValue)) {
		cout << intValue << ' ';
		++intValue;

	}
	cout << "\nStack is full. Cannot push " << intValue
		<< "\n\nPopping elements from intStack\n";

	while (intStack.pop(intValue))
		cout << intValue << ' ';

	cout << "\nStack is empty. Cannot pop\n";
}


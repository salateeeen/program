 /******************************************************************
// allocating and deallocating memory space using new and delete
******************************************************************/


#include<iostream>
using namespace std;

int exam(int& x)
{
	x *= 2;
	return 8;
}

void Luck(char* h) { cout << *h << 'A' << endl; }

int main()
{
	char* p = new char('G');
	double* a = new double(6.7);
	int x;
	cin >> x; // assume x is 10 or larger
	int* d = new int[x];
	for (int i = 0; i < x; i++)
		d[i] = i + 2;
	cout << *p << endl;
	*a += 3;
	cout << *a <<"*a"<< endl;
	cout << exam(d[1]) << endl;
	cout << *d << endl;
	cout << exam(d[7]) << exam(d[5]) << endl;
	Luck(p);
	for (int j = 0; j < x; j++)
	{
		cout << d[j] << "\t";
		if ((j + 1) % 3 == 0)
			cout << endl;
	}

	delete[] d;
	delete p;
	delete a;

	system("pause");
}



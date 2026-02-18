#include <iostream>
#include <cmath>
using namespace std;

void readTwoNum(int& num1, int& num2, int& num3)
{
    cout<< "read num1" << endl;
    cin >> num1;

    cout << "read num2" << endl;
    cin >> num2;

    cout << "read num3" << endl;
    cin >> num3;
}

int theBigOfThreeNum(int num1, int num2, int num3){
    int max = num1;
    if (num2 > max)
    int max = num2;
    if (num3 > max)
    int max = num3;
    return max;
}

void theBigNum(int big)
{
    cout<<"the big num "<<big;
}

int main()
{
    int num1, num2, num3;
    readTwoNum(num1, num2, num3);
    theBigNum(theBigOfThreeNum(num1, num2, num3));
}

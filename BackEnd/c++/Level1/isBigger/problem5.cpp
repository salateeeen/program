#include <iostream>
#include <cmath>
using namespace std;
enum enumBig{big, small};

void readTwoNum(int& num1, int& num2)
{
    cout<< "read num1" << endl;
    cin >> num1;

    cout << "read num2" << endl;
    cin >> num2;
}

enumBig isBigger(int num1, int num2)
{
    if (num1 > num2)
    return enumBig::big;
    else
    return enumBig::small;
}

int theNum(int num1, int num2){
    if (isBigger(num1, num2) == enumBig::big)
    return num1;
    else
    return num2;
}

void theBigNum(int big)
{
    cout<<"the big num "<<big;
}

int main()
{
    int num1, num2;
    readTwoNum(num1, num2);
    theBigNum(theNum(num1, num2));
}

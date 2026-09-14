#include <iostream>
#include <cmath>
using namespace std;

int readNum()
{
    int num;
    cout << "please enter num " << endl;
    cin >> num;

    return num;
}

float totalBill(float totalBill)
{
    totalBill *= 1.1;  // 10%
    totalBill *= 1.16; // 16%
    return totalBill;
}

void printTotalBill(float totalBill)
{
    cout << "the total bill after tax is " << totalBill << endl;
}

int main()
{
    printTotalBill(totalBill(readNum()));
}

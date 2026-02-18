#include <iostream>
#include <cmath>
using namespace std;

int ReadPositiveNumber(string Message)
{
    int Number = 0;
    do
    {
        cout << Message << endl;
        cin >> Number;
    } while (Number <= 0);
    return Number;
}
void sumOfDigit(int Number)
{
    int sum = 0;
    int remainder = 0;

    while (Number > 0)
    {
        remainder = Number % 10;
        Number = Number / 10;
        sum += remainder;
    }
    cout << sum << endl;
}

int main()
{
    sumOfDigit(ReadPositiveNumber("Please enter a positivenumber?"));
    return 0;
}
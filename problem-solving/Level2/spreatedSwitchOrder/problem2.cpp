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
void spreated(int Number)
{
    int remainder = 0;

    while (Number > 0)
    {
        remainder = Number % 10;
        Number = Number / 10;
        cout << remainder << endl;
    }
}

int main()
{
    spreated(ReadPositiveNumber("Please enter a positivenumber?"));
    return 0;
}
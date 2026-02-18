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
void frequecyDigit(int Number)
{
    int Number2 = ReadPositiveNumber("Please enter a number to chick");
    int count = 0;
    int remainder = 0;
    while (Number > 0)
    {
        remainder = Number % 10;
        Number = Number / 10;
        if (remainder == Number2)
        {
            count++;
        }
        }
    cout << Number2 << " is frequecy " << count << " times";
}

int main()
{
    frequecyDigit(ReadPositiveNumber("Please enter a positivenumber?"));
    return 0;
}
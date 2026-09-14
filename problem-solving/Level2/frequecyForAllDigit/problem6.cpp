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
int frequecyDigit(int Number, int Number2)
{

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
    return count;
}

void frequecyForAllDigit(int Number)
{

    for (int i = 0 ; i < 10 ; i++)
    {
        int frequecy = frequecyDigit(Number, i);
        if (frequecy > 0)
        {
            cout << i << " is frequecy " << frequecy << " times" <<endl;
        }
    }
}

int main()
{
    frequecyForAllDigit(ReadPositiveNumber("Please enter a positivenumber?"));
     return 0;
}
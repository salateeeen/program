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
bool perfectNumbers(int Number)
{
    int Sum = 0;
    for (int i = 1; i <= Number / 2; i++)
    {
        if (Number % i == 0)
            Sum += i;
    }
    return Number == Sum;
}

void PrintResults(int Number)
{
    for (int i = 1; i <= Number ; i++)
    {
    if (perfectNumbers(i))
        cout << i << " Is Perfect Number.\n";
    }
}
int main()
{
    PrintResults(ReadPositiveNumber("Please enter a positivenumber?"));
    return 0;
}
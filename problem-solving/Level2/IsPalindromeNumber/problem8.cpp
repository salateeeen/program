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
int reverseNum(int Number)
{
    int remainder = 0;
    int Number2 = 0;

    while (Number > 0)
    {
        remainder = Number % 10;
        Number = Number / 10;
        Number2 = Number2 * 10 + remainder;
    }
    return Number2;
}

bool IsPalindromeNumber(int Number){
    return Number == reverseNum(Number);
}

void pintIsPalindromeNumber(int Number){
    if (IsPalindromeNumber(Number))
    {
        cout <<"The "<< Number <<" is palindrome number";
    } else
        cout << "The " << Number << " is not palindrome number";
}

    int
    main()
{
    pintIsPalindromeNumber(ReadPositiveNumber("Please enter a positivenumber?"));
    return 0;
}
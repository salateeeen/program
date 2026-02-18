
#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

int fibonacci(int num)
{
    int prev1 = 1;
    int prev2 = 0;
    int fibonacci= 1;
    if (num <= 1)
    {
        return num;
    }
    else
    {
        for (int i = 2; i < num; i++)
        {
            fibonacci = prev1 + prev2;
            prev2 = prev1;
            prev1 = fibonacci;
        }
        return fibonacci;
    }
}

int main()
{
    cout << fibonacci(7);
}

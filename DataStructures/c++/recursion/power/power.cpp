#include <iostream>
using namespace std;

int power1(int m, int n)
{
    if (n == 0)
    {
        return 1;
    }
    else
        return power1(m, n - 1) * m;
}

int power2(int m, int n)
{
    if (n == 0)
    {
        return 1;
    }
    else if (n % 2 == 0)
    {
        return power2(m * m, n / 2);
    }
    else if (n % 2 == 1)
    {
        return power2(m * m, (n - 1) / 2) * m;
    }
}

int main()
{
    int tracePower1 = power1(2, 5);
    cout << tracePower1 << endl;

    int tracePower2 = power2(2, 5);
    cout << tracePower2 << endl;
}

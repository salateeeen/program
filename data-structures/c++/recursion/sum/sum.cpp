#include <iostream>
using namespace std;

int sum1(int n)
{
    if (n == 0)
    {
        return 0;
    }
    else
        return sum1(n - 1) + n;
}

int sum2(int n)
{
    return (n * (n + 1)) / 2;
}

int main()
{
    int traceSum1 = sum1(500);
    cout << traceSum1 << endl;

    int traceSum2 = sum2(500);
    cout << traceSum2 << endl;
}

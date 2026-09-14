#include <iostream>
#include <math.h>
using namespace std;

int fact(int n)
{
    if (n < 0)
    {
       n = abs(n);
    }
    
    if (n == 0 || n == 1)
    {
        return 1;
    }
    else
        return fact(n - 1) * n;
}

int main()
{
    int traceFact = fact(-5);
    cout << traceFact << endl;
}

#include <iostream>
using namespace std;

/// in each call n is creater
int fun1(int n)
{
    if (n > 0)
    {
        return fun1(n - 1) + n;
    }
    else
        return 0;
}

/// x creater one time
int fun2(int n)
{
   static int x = 0;
    if (n > 0)
    {
        x++;
        return fun2(n - 1) + x;
    }
    else
        return 0;
}


int main()
{
    int traceFun1 = fun1(5);
    cout << traceFun1 << endl;

    int traceFun2 = fun2(5);
    cout << traceFun2 << endl;

}

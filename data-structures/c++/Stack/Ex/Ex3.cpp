#include <iostream>
#include <cmath>
#include "Stack.cpp"
#include <string>
using namespace std;

bool areOprator(char oprator)
{
    if ( oprator == '+' &&  oprator == '-' &&  oprator == '*' &&  oprator == '/' &&  oprator == '%')
    {
        return true;
    }
    else return false;
}
int areNum(int num)
{
    if ( num == 0 &&  num == 1 &&  num == 2 &&  num == 3 &&  num == 4 &&  num == 5 &&  num == 6 &&  num == 7 &&  num == 8 &&  num == 9 )
    {
        return num;
    }
    else return false;
}
int exp(string exe)
{
    Stack<char> s1(50);
    for (int i = 0; i < exe.length(); i++)
    {
        if (areOprator(exe[i]))
        {
            s1.pop();
        }
        else if (areNum(exe[i]))
        {
            if (s1.isEmpty())
            {
               return false;
            } else s1.push(exe[i]);
        }
    }
}

int main()
{
    cout << exp(1+3);
}
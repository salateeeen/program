#include <iostream>
#include <cmath>
#include "Stack.cpp"
#include <string>
using namespace std;
bool arePair(char open, char close)
{
    if (open == '(' && close == ')')
    {
        return true;
    }
    else if (open == '{' && close == '}')
    {
        return true;
    }
    else if (open == '[' && close == ']')
    {
        return true;
    }
}

bool exp(string exe)
{
    Stack<char> s1(50);
    for (int i = 0; i < exe.length(); i++)
    {
        if (exe[i] == '(' || exe[i] == '{' || exe[i] == '[')
        {
            s1.push(exe[i]);
        }
        else if (exe[i] == ')' || exe[i] == '}' || exe[i] == ']')
        {
            if (s1.isEmpty() || !arePair(s1.getTop(), exe[i]))
            {
               return false;
            } else s1.pop();
        }
    }

   return s1.isEmpty();
    
}

int main()
{
    cout << exp("[122(12)]");
}
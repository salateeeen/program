#include <iostream>
#include <cmath>
#include "Stack.cpp"
#include <stdio.h>
using namespace std;

int main()
{
    int asci = 66;
    string name = "A";
    Stack<string> s1(5);
    while (s1.push(name))
    {
        name += (char)asci++;
    }
    s1.printStack();

    int num1 = 1;
    int num2 = 1;
    int sum = 5;
    Stack<int> s2(5);
    while (s2.push(sum))
    {
        sum += num1 + num2;
    }
    s2.printStack();


}

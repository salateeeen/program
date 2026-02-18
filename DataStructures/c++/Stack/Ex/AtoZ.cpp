#include <iostream>
#include <cmath>
#include "Stack.cpp"
#include <string>
using namespace std;
Stack<char> A(100);
Stack<char> B(100);
Stack<char> C(100);
Stack<char> D(100);
Stack<char> E(100);
Stack<char> F(100);
Stack<char> G(100);
Stack<char> H(100);
Stack<char> I(100);
Stack<char> J(100);
Stack<char> K(100);
Stack<char> L(100);
Stack<char> M(100);
Stack<char> N(100);
Stack<char> O(100);
Stack<char> P(100);
Stack<char> Q(100);
Stack<char> R(100);
Stack<char> S(100);
Stack<char> T(100);
Stack<char> U(100);
Stack<char> V(100);
Stack<char> W(100);
Stack<char> X(100);
Stack<char> Y(100);
Stack<char> Z(100);

void pushElement(string word)
{
    int i = 0;
    while (word[i] != '$')
    {
        if (word[i] == 'A' || word[i] == 'a')
        {
            while (word[i] != '#')
            {
                A.push(word[i]);
                i++;
                if (word[i] != '$')
                {
                    break;
                }
            }
        }
        else if (word[i] == 'B' || word[i] == 'b')
        {
            while (word[i] != '#')
            {
                B.push(word[i]);
                i++;
                if (word[i] != '$')
                {
                    break;
                }
            }
        }
        else if (word[i] == 'C' || word[i] == 'c')
        {
            while (word[i] != '#')
            {
                C.push(word[i]);
                i++;
                if (word[i] != '$')
                {
                    break;
                }
            }
        }
    }
}

int main()
{
    pushElement("bbb#aaa#ccc$");
    // A.printStack();
    // B.printStack();
    // C.printStack();
   

}

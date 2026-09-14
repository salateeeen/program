#include <iostream>
#include <cmath>
using namespace std;

int readNum()
{
    int num;
    cout<< "num1" << endl;
    cin >> num;
    return num;
}

void invertedNum(int Number){
for (int i = Number; i >= 1; i--)
{
    for ( int j = 0; j < i; j++)
    {
        cout<< i <<" ";
    }
    cout << endl;
}
}

void invertedReverseNum(int Number)
{
    for (int i = 1; i <= Number; i++)
    {
        for (int j = 0; j < i; j++)
        {
            cout << i << " ";
        }
        cout << endl;
    }
}

int main()
{
    invertedNum(readNum());
    invertedReverseNum(readNum());
}

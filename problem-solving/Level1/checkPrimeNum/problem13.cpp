#include <iostream>
#include <cmath>
using namespace std;

enum primeNum
{
    prime,
    notPrime
};

int readNum()
{
    int num;
    cout << "please enter num " << endl;
    cin >> num;

    return num;
}

primeNum checkPrimeNum(int num)
{
    int m = round(num / 2);
    for (int count = 2; count <= m; count++)
    {
        if (num % count == 0)
        {
            return primeNum::notPrime;
        } 
    } 
    return primeNum::prime;
}

void printPrimeNum(primeNum primeNum)
{
    if (primeNum::prime  == primeNum)
        cout << "the number is prime "<< endl;
    else
        cout << "the number is not prime "<< endl;
}

int main()
{
    printPrimeNum(checkPrimeNum(readNum()));
}

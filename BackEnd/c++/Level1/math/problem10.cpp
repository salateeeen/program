#include <iostream>
#include <cmath>
using namespace std;
enum enumOddEven{ODD, EVEN, ALL};

int readNum()
{ 
    int num;
    cout<< "read num" <<endl;
    cin >> num;
    return num;
}
int readPow()
{ 
    int pow;
    cout<< "read pow" <<endl;
    cin >> pow;
    return pow;
}
enumOddEven oddOReven(int num)
{
    if (num%2 == 0)
    return enumOddEven::EVEN;
    else
    return enumOddEven::ODD;
}

int theSum(int num){
    int sum = 0;

    for (int i = 0; i <= num; i++)
    {
        if (oddOReven(i) == enumOddEven::EVEN)
        {
            sum += i;
        }
    }
    return sum;
}

int theFactorial(int num){
    int factorial =1;

    for (int i = 1; i <= num; i++)
    {
        factorial*=i;
    }
    return factorial;
}

int thePow(int num, int pow){
    if (pow == 0)
    {
        return 1;
    }

    int p =1;
    for (int i = 1; i <= pow; i++)
    {
        p*=num;
    }
    return p;
}

void printSum(int sum)
{
    cout<<"the sum is "<<sum <<endl;
}

void printFactorial(int factorial)
{
    cout<<"the factorial is "<<factorial <<endl;
}

void printPow(int pow)
{
    cout<<"the pow is "<<pow <<endl;
}

int main()
{
    // printFactorial(theFactorial(readNum()));
    // printSum(theSum(readNum()));
    printPow(thePow(readNum(),readPow()));
}

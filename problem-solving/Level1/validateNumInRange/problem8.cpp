#include <iostream>
#include <cmath>
using namespace std;

void readNum(int& num1)
{
    cout<< "num1" << endl;
    cin >> num1;
}

bool validateNumInRange(int num, int from, int to){
    return num >= from && num <= to;  
}

void printValidat(int num, int from, int to)
{
    if (validateNumInRange(num, from, to))
    cout<<"is valid"<<endl;
    else
    cout<<"is invalid"<<endl;
}

int main()
{
    int num1;
    readNum(num1);
    printValidat(num1, 5, 10);
   
}

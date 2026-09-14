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

bool validateNumInRange(int num, int from, int to){
    return num >= from && num <= to;  
}

int untilValid(int from, int to){
    int num;
    do
    {
        num = readNum();
    } while (!validateNumInRange(num, from, to));

    return num;
}

void printValidat(int age)
{
   
    cout<<age<<" is valid"<<endl;
   
}

int main()
{
  printValidat(untilValid(18, 45));
}

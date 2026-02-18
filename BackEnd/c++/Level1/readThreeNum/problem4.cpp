#include <iostream>
#include <cmath>
using namespace std;
enum enumPass{pass, fail};

struct threeNum
{
    int num1;
    int num2;
    int num3;
};

threeNum readThreeNum()
{
    threeNum nums;
    cout<< "read num1" << endl;
    cin >> nums.num1;

    cout << "read num2" << endl;
    cin >> nums.num2;

    cout << "read num3" << endl;
    cin >> nums.num3;

    return nums;
}

int sum3Nums(threeNum nums)
{
    int sumOfNums =  nums.num1 + nums.num2 + nums.num3;
    return sumOfNums ;
}

float avgOfNums(threeNum nums)
{
    float avgOfNums =  sum3Nums(nums)/3;
    return (float) avgOfNums ;
}

enumPass checkResulot(int avg){
    if (avg >= 50)
    return enumPass::pass;
    else
    return enumPass::fail;
}

void printSumOfNum(int printSumOfNum)
{
    cout<<"sum of num is  "<<printSumOfNum;
}

void printAvgOfNum(float printAvgOfNum)
{
    cout<<"avg of num is  "<<printAvgOfNum;
}

void printResult(int avg){
    if (checkResulot(avg) == enumPass::pass)
    cout<<"is pass"<<endl;
    else
    cout<<"is fail"<<endl;
}

int main()
{
    printResult(avgOfNums(readThreeNum()));
}

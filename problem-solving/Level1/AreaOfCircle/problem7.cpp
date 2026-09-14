#include <iostream>
#include <cmath>
using namespace std;

void readThreeNum(float& num1, float& num2, float& num3)
{
    cout<< "num1" << endl;
    cin >> num1;

    cout << "num2" << endl;
    cin >> num2;

    cout << "num3" << endl;
    cin >> num3;
}

float AreaOfCircle(float a, float b, float c){
    const float PI = 3.14; 

    float p =(a + b + c) / 2;

    float T = (a * b * c) / (4 * sqrt(p * (p - a) * (p - b) * (p - c)));

    float area = PI * pow(T, 2);

    return (float)area;  
}

void theArea(float area)
{
    cout<<"the area is "<<area;
}

int main()
{
    float num1, num2, num3;
    readThreeNum(num1, num2, num3);
    theArea(AreaOfCircle(num1, num2, num3));
   
}

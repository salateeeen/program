#include <iostream>
#include <cmath>
using namespace std;

float sales()
{ 
    int sale;
    cout<< "read sale" <<endl;
    cin >> sale;
    return sale;
}

float commission(float total)
{ 
    if (total >= 1000000)
    return 0.01;
    else if (total >= 500000)
    return 0.02;
    else if (total >= 100000)
    return 0.03;
    else if (total >= 50000)
    return 0.05;
    else 
    return 0;
}

float totalCommission(int total){
    return commission(total)*total;
}

void printTotalSales(int total){
 cout<< "the total sales "<<total <<endl;
}

int main()
{
    printTotalSales(totalCommission(sales()));
}

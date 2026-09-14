#include <iostream>
#include <cmath>
using namespace std;

struct piggyBank
{
    int pennies, nickels, dimes, quarters, dollars;
};

piggyBank readPiggyBank()
{
    piggyBank read;

    cout << "please enter pennies " << endl;
    cin >> read.pennies;
    cout << "please enter nickels " << endl;
    cin >> read.nickels;
    cout << "please enter dimes " << endl;
    cin >> read.dimes;
    cout << "please enter quarters " << endl;
    cin >> read.quarters;
    cout << "please enter dollars " << endl;
    cin >> read.dollars;

    return read;
}

float totalPennies(piggyBank piggyBank)
{
    return piggyBank.pennies * 1 + piggyBank.nickels * 5 + piggyBank.dimes * 10 + piggyBank.quarters * 25 + piggyBank.dollars * 100;
}

void printPiggyBank(float total)
{
    cout << "the total piggy bank " << total << endl;
}

int main()
{
    printPiggyBank(totalPiggyBank(readPiggyBank()));
}

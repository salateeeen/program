#include <iostream>
#include <cmath>
#include <ctime>
using namespace std;

int randomNumber()
{
    int randomNumber = 0;
    int theNumber = 0;
    for (int i = 0; i < 3; i++)
    {
        randomNumber = rand() % 10 + 1;
        theNumber = theNumber * 10 + randomNumber;
    }
    return theNumber;
}

void printRandomNumber(int randomNum)
{
    cout << "the random number is " << randomNum << endl;
}

int main()
{
    /// only once time in main
    srand(time(0));
    printRandomNumber(randomNumber());
}

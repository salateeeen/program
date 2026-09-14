#include <iostream>
#include <cmath>
#include <ctime>
using namespace std;

int randomNumbers(int min, int max)
{
    return rand() % (max - min + 1) + min;  
}

int main()
{
    /// only once time in main
    srand(time(0));
    /// any number mod 1 equal 0
    randomNumbers(5, 5);
}

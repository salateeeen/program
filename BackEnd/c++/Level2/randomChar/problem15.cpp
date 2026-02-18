#include <iostream>
#include <cmath>
#include <ctime>
using namespace std;
enum type
{
    small,
    capital
};

int randomNumbers(int min, int max)
{
    return rand() % (max - min + 1) + min;
}

char randomChar(type type)
{
    if (type == type::capital)
    {
        return (char) randomNumbers(65, 90);
    }

    if (type == type::small)
    {
        return (char) randomNumbers(97, 122);
    }
}

int main()
{
    srand(time(0));

    cout << randomChar(type::capital)<<endl;
    cout << randomChar(type::small) << endl;
}

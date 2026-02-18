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
        return (char)randomNumbers(65, 90);
    }

    if (type == type::small)
    {
        return (char)randomNumbers(97, 122);
    }
}

string generateFourChar()
{
    string word = "";
    for (int i = 0; i < 4; i++)
    {
        word += randomChar(type::capital);
    }
    return word;
}

string generateKey()
{
    string key = "";
    string backspace = "";

    for (int i = 0; i < 4; i++)
    {
        backspace = (i != 3) ? "-" : "";
        key += generateFourChar() + backspace;
    }
    return key;
}
void generateKeys(int number)
{
    for (int i = 0; i < number; i++)
    {
        cout << generateKey() << endl;
    }
    
}

int main()
{
    srand(time(0));

    // cout << generateFourChar() << endl;
    // cout << generateKey() << endl;
    generateKeys(5);
}

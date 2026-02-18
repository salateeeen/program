#include <iostream>
#include <cmath>
using namespace std;

string readPinCode()
{
    string pin;
    cout << "please pin code " << endl;
    cin >> pin;

    return pin;
}

bool checkLogIn()
{
    string pin;
    int count = 3;
    do
    {
        count--;
        pin = readPinCode();

        if (pin == "1234")
        {
            return true;
        }

    } while (pin != "1234" && count != 0);
    return false;
}

void LogIn(bool log)
{
    if (log == true)
    {
        system("color 2f");
        cout << "the balance is 7500" << endl;
    }
    else
    {
        cout << "plase try later" << endl;
    }
}

int main()
{
    LogIn(checkLogIn());
}

#include <iostream>
#include <cmath>
using namespace std;

enum num
{
    zero = 50,
    one = 25,
    two = 75
};

struct Info
{
    int age;
    bool hasDriverCard;
    bool hasRecomandetion;
};

Info readInfo()
{
    Info info;

    cout << "read recomandetion";
    cin >> info.hasRecomandetion;

    cout << "read age";
    cin >> info.age;

    cout << "read hasDriverCard";
    cin >> info.hasDriverCard;

    return info;
}
bool isAccepted(Info info)
{
    if (info.hasRecomandetion)
    {
        return true;
    }
    else
    {
        return (info.age > 20 && info.hasDriverCard);
    }
}
void theResult(Info info)
{
    if (isAccepted(info))
    {
        cout << "Accepted";
    }
    else
        cout << "Regected";
}

int main()
{
    theResult(readInfo());
}

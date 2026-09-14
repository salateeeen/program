#include <iostream>
#include <cmath>
using namespace std;

struct fullName
{
    string firstName;
    string lastName;
};

fullName readName()
{
    fullName name;

    cout << "firstName"<<endl;
    cin >> name.firstName;

    cout << "lastName"<<endl;
    cin >> name.lastName;

    return name;
}
void printFullName(fullName name)
{
    string fullName;
    fullName =  name.firstName + " " + name.lastName;
    cout<< fullName;
}

int main()
{
    printFullName(readName());
}

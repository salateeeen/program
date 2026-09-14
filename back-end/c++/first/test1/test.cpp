#include <iostream>
#include <cmath>
#include<cstdio>
#include <iomanip> // this library stored the std::setw
using namespace std;
enum enumOddEven
{
    ODD = 1,
    EVEN,
    ALL
};

/// decleration
int ReadPositiveNumber(string);

int main()
{
    if (enumOddEven::ODD == 1)
    {
        cout << "yep";
    }
    else
        cout << "no";

    cout << "sultan"[0];
    string name = "sultan";
    cout << name.length();

    /// auto
    auto integer = 10;
    auto Double = 10.34;
    auto String = "sultanOmar";

    int arr[] = {1, 2, 3};
    cout << arr[3];

    int Array1[] = {1, 2, 3, 4};
    for (int n : Array1)
    {
        cout << n << endl;
    }

    /// switch to binary then decemal
    cout << "Result:" << (12 & 25);
    cout << "Result:" << (12 | 25);

    cout << setw(9) << "C101" << "|" << setw(32) << "introduction to Programming 1 " << " | " << setw(9) << " 95 " << " | " << endl;

    cout << setw(9) << "C102" << "|" << setw(32) << "Computer Hardware " << " |  " << setw(9) << " 88 " << " | " << endl;

    cout << setw(9) << "C1035243" << "|" << setw(32) << "Network" << "|" << setw(9) << "75" << "|" << endl;
                                        
    cout << "---------|--------------------------------|---------  | " << endl;
      
    return 0;
}

/// definition
int ReadPositiveNumber(string Message)
{
    int Number = 0;
    do
    {
        cout << Message << endl;
        cin >> Number;
    } while (Number <= 0);
    return Number;
}
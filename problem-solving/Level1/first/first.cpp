#include <iostream>
#include <cmath>
using namespace std ;

enum num {zero=50, one=25, two=75};
enum enumOddEven{ODD=1, EVEN};

struct  Eng
{
    int year;
    string id = "2231413";
};
struct  Sultan
{
    int age;
    string name = "sultan";
    Eng eng;
};

int main() {
    num myNum = one ;
    cout<< myNum <<endl;
    string st = "sultan";
    string st1;
    // cout<< stl(st)
    int array[] = {1, 2, 3, 4, 5};
    cout<<*array<<endl;
    string array2[] = {"sultan", "omar", "zain"};
    system("color 2f");

    if (enumOddEven::ODD == 1)
    {
        cout<<"yep";
    }
    else cout << "no";
}


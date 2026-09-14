#include <iostream>
#include <vector>
using namespace std;

struct theBest
{
   string name;
   int age;
};


int main()
{
    vector<int> temp;
    int a = 1;
    temp.push_back(a);

    a = 4;
    temp.push_back(a);

    for (int num : temp)
    {
        cout << num << " ";
    }
    cout << endl;

    vector<theBest> tempVector;
    theBest sultan;
    sultan.name ="sultan";
    sultan.age =21;
    tempVector.push_back(sultan);

    sultan.name = "asad";
    sultan.age = 23;
    tempVector.push_back(sultan);

    for (theBest &Struct : tempVector)
    {
        cout << Struct.name << " " << Struct.age << " " << endl;
    }
}
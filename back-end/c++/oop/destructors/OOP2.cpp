#include <iostream>
using namespace std;
class clsPerson
{
public:
    string FullName;
    int num;
    // This is Instructor will be called when object is built.
    clsPerson(int num)
    {
        this->num = num;
        FullName = "Mohammed Abu-Hadhoud";
        cout << "\nHi, I'm Constructor from obj " << this->num;
    }
    // This is destructor will be called when object is destroyed.
    ~clsPerson()
    {
        cout << "\nHi, I'm Destructor from obj " << this->num;
    }
};
void Fun1()
{
    clsPerson Person1(1);

    clsPerson *Person2 = new clsPerson(2);
    delete Person2;
}

int main()
{
    Fun1();
    // Fun2();
    system("pause>0");
    return 0;
}
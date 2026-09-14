// ProgrammingAdivces.com
// Mohammed Abu-Hadhoud
#include <iostream>
using namespace std;

class clsPerson
{

    class clsAddress
    {
    private:
        string AddressLine1;
        string AddressLine2;
        string City;
        string Country;

    public:
        clsAddress(string _AddressLine1, string _AddressLine2, string _City, string _Country)
        {
            AddressLine1 = _AddressLine1;
            AddressLine2 = _AddressLine2;
            City = _City;
            Country = _Country;
        }

        void Print()
        {
            cout << "\nAddress:\n";
            cout << AddressLine1 << endl;
            cout << AddressLine2 << endl;
            cout << City << endl;
            cout << Country << endl;
        }
    };

public:
    string FullName;
    clsAddress Address;

    clsPerson():Address("Building 10", "Queen Rania Street", "Amman", "Jordan")
    {
        FullName = "Mohammed Abu-Hadhoud";
    }
};

int main()

{

    clsPerson Person1;

    Person1.Address.Print();

    system("pause>0");
    return 0;
}

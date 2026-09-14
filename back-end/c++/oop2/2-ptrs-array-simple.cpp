
#include <iostream>
#include <string>

using namespace std;


class student {
    string name,major;
    long id;
    int year;
    

public:
    void set_attributes(string na, long no, int ye = 2014, string maj = "CE")
    {
        name = na;
        id = no;
        if (ye == 2014 || ye == 2013 || ye == 2012 || ye == 2011)
            year = ye;
        else
            year = 2014;

        major = maj;

    }
    void display_attributes()
    {
        cout << "hello" << endl;
        cout << "iam " << name << "   a student with ID : " << id << endl;
        cout << "Enrolled HU in : " << year << "and my major is :" << major << endl << endl << endl;
    }

};

int main()
{
    student students[3];

    students[0].set_attributes("ahmad", 20140301);

    student* pointer_to_student = &students[1];

    pointer_to_student->set_attributes("Ali", 20140303, 2003);

    (pointer_to_student + 1)->set_attributes("Bayan", 20130304, 2013, "EE");

    for (int i = -1; i < 2; i++)
        (pointer_to_student + i)->display_attributes();


    return 0;
}

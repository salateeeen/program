#include <iostream>
#include <cmath>
using namespace std;

enum enumMark{pass, fail};

int readMark()
{
    int mark;
    cout << "read Mark"<<endl;
    cin >>mark;

    return mark;
}

enumMark checkMark(int mark){
    if(mark >= 50)
    return enumMark::pass;
    else
    return enumMark::fail;
}

void printStatue(int mark)
{
    if(checkMark(mark) == enumMark::pass)
    cout<<"is pass";
    else
    cout<<"is fail";
}

int main()
{
    printStatue(readMark());
}

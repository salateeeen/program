#include <iostream>
#include <cmath>
using namespace std;

struct Time
{
    int days, hours, minutes, seconds;
};

Time readTimes()
{
    Time read;

    cout << "please enter days " << endl;
    cin >> read.days;
    cout << "please enter hours " << endl;
    cin >> read.hours;
    cout << "please enter minutes " << endl;
    cin >> read.minutes;
    cout << "please enter seconds " << endl;
    cin >> read.seconds;
    return read;
}

float totalSeconds(Time time)
{
    return time.days*24*60*60 + time.hours*60*60 + time.minutes*60 + time.seconds*1;
}

void printSeconds(float total)
{
    cout << "the total seconds " << total << endl;
}

int main()
{
    printSeconds(totalSeconds(readTimes()));
}

#include <iostream>
#include <cmath>
using namespace std;

struct Time
{
    int days, hours, minutes, seconds;
};

int readSeconds()
{
    int seconds;
    cout << "please enter seconds " << endl;
    cin >> seconds;

    return seconds;
}

Time totalDays(int seconds)
{
    Time time;
    const int secondsPerDay = 24 * 60 * 60;
    const int secondsPerHours = 60 * 60;
    const int secondsPerMinutes = 60;

    int reminder = 0;
    time.days = floor(seconds / secondsPerDay);
    reminder = seconds % secondsPerDay;
    time.hours = floor(reminder / secondsPerHours);
    reminder = reminder % secondsPerHours;
    time.minutes = floor(reminder / secondsPerMinutes);
    reminder = reminder % secondsPerMinutes;
    time.seconds = reminder;

    return time;
}

void printTime(Time time)
{
    cout << time.days << ":" << time.hours << ":" << time.minutes << ":" << time.seconds << endl;
}

int main()
{
    printTime(totalDays(readSeconds()));
}

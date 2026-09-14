#include <iostream>
#include <cmath>
using namespace std;

int readHours()
{
    int num;
    cout << "please enter hours " << endl;
    cin >> num;

    return num;
}

float hoursToDays(int hours)
{
    return (float)hours / 24;
}

float daysToWeeks(int days)
{
    return (float)days / 7;
}

float hoursToWeekss(float hours)
{
    return hoursToDays(hours) / 7;
}

void printTotalDays(float totalDays)
{
    cout << "the total total days is " << totalDays << endl;
}

int main()
{
    printTotalDays(hoursToDays(readHours()));
    // printTotalDays(hoursToWeekss(hoursToDays(readHours())));
}

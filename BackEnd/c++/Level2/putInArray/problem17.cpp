#include <iostream>
#include <cmath>
using namespace std;
;

int ReadPositiveNumber()
{
    int Number = 0;
    do
    {
        cout << "please enter size " << endl;
        cin >> Number;
    } while (Number <= 0);
    return Number;
}
int ReadNumber(int i)
{
    int Number = 0;
    cout << "arr[" << i << "] please enter number = ";
    cin >> Number;
    cout << endl;

    return Number;
}

int arr[] = {};
void putInArray(int size)
{
    for (int i = 0; i < size; i++)
    {
        arr[i] = ReadNumber(i);
    }
}

void printArray(int array[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << array[i] << " ";
    }
    cout << endl;
}

int frequecyDigit(int array[], int numToChick, int size)
{
    int count = 0;
    for (int i = 0; i < size; i++)
    {
        if (array[i] == numToChick)
        {
            count++;
        }
    }
    return count;
}

int main()
{
    int size = ReadPositiveNumber();
    putInArray(size);
    printArray(arr, size);
    cout << frequecyDigit(arr, 3, size);
}

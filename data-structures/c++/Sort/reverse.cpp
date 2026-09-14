#include <iostream>
#include <cmath>
using namespace std;

void reverse(int array[], int size)
{
    int j = size - 1;
    for (int i = 0; i < floor(size / 2); i++)
    {
        swap(array[i], array[j]);
        j--;
    }
}

void swap(int &x, int &y)
{
    int temp = x;
    x = y;
    y = temp;
}
void printArray(int array[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << array[i] << "  ";
    }
    cout << endl;
}

int main()
{
    int array[] = {121, 25, 23, 5, 44, 53};
    int size = sizeof(array)/sizeof(array[0]);
    printArray(array, size);
    reverse(array, size);
    printArray(array, size);
}
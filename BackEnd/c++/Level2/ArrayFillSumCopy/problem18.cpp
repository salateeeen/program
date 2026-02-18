#include <iostream>
#include <cmath>
#include <ctime>
using namespace std;

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

int randomNumber(int min, int max)
{
    return rand() % (max - min + 1) + min;
}

void fillArrayInRandom(int array[], int size)
{
    for (int i = 0; i < size; i++)
    {
        array[i] = randomNumber(1, 100);
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

int maxOfArray(int array[], int size)
{
    int max = 0;
    for (int i = 0; i < size - 1; i++)
    {
        if (array[i + 1] > array[max])
        {
            max = i + 1;
        }
    }
    return array[max];
}

int minOfArray(int array[], int size)
{
    int min = 0;
    for (int i = 0; i < size - 1; i++)
    {
        if (array[i + 1] < array[min])
        {
            min = i + 1;
        }
    }
    return array[min];
}

int sumOfArray(int array[], int size)
{
    int sum = 0;
    for (int i = 0; i < size; i++)
    {
        sum += array[i];
    }
    return sum;
}

int avgOfArray(int array[], int size)
{
    return sumOfArray(array, size) / size;
}

void copyFrom(int copy[], int from[], int size)
{
    for (int i = 0; i < size; i++)
    {
        copy[i] = from[i];
    }
}

void sumOfTwoArr(int arr1[], int arr2[], int to3[],int size)
{
    for (int i = 0; i < size; i++)
    {
        to3[i] = arr1[i]+ arr2[i];
    }
}

int main()
{
    srand(time(0));
    int size = ReadPositiveNumber();
    int *arr1 = new int[size];
    fillArrayInRandom(arr1, size);
    printArray(arr1, size);
    cout << "maxOfArray: " << maxOfArray(arr1, size) << endl;
    cout << "minOfArray: " << minOfArray(arr1, size) << endl;
    cout << "sumOfArray: " << sumOfArray(arr1, size) << endl;
    cout << "avgOfArray: " << avgOfArray(arr1, size) << endl;
    int *arr2 = new int[size];
    int *arr3 = new int[size];
    copyFrom(arr2, arr1, size);
    printArray(arr2, size);
    sumOfTwoArr(arr1, arr2, arr3, size);
    printArray(arr3, size);
}

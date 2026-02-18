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

void swap(int &num1, int &num2)
{
    int temp = num1;
    num1 = num2;
    num2 = temp;
}

int randomNumber(int min, int max)
{
    return rand() % (max - min + 1) + min;
}

void fillArrayInOrder(int array[], int size)
{
    for (int i = 0; i < size; i++)
    {
        array[i] = i + 1;
    }
}

void shuffleArrayInOrder(int array[], int size)
{
    for (int i = 0; i < size; i++)
    {
        swap(array[i], array[randomNumber(0, size - 1)]);
    }
}

void reverseArray(int array[], int size)
{
    int j = size - 1;
    for (int i = 0; i < size / 2; i++)
    {

        swap(array[i], array[j--]);
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

int search(int array[], int numToSearch ,int size)
{
    for (int i = 0; i < size; i++)
    {
       if(array[i] == numToSearch){
        return i;
       }
    }
    return -1;
}

int main()
{
    srand(time(0));
    int size = ReadPositiveNumber();
    int *arr1 = new int[size];
    int *arr2 = new int[size];
    int *arr3 = new int[size];

    fillArrayInOrder(arr1, size);
    printArray(arr1, size);

    fillArrayInOrder(arr2, size);
    reverseArray(arr2, size);
    printArray(arr2, size);
    
    fillArrayInOrder(arr3, size);
    shuffleArrayInOrder(arr3, size);
    printArray(arr3, size);

    cout << search(arr1, 4, size)<< endl;
    cout << search(arr1, 7, size)<< endl;

}

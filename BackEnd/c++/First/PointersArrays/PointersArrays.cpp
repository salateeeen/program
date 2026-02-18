#include <iostream>
#include <vector>
using namespace std;

int arr[5] = {1, 2, 3, 4, 5};

int main()
{
    int *ptr = arr;
    cout << ptr << " <-> " << &arr[0] << endl;
    cout << ptr + 1 << " <-> " << &arr[1] << endl;

    cout << *(arr + 3) << endl;

    cout << *ptr << " <-> " << arr[0] << endl;
    cout << *(ptr + 1) << " <-> " << arr[1] << endl;

    /// Dynamic Arrays
    int *ptrArr;
    cout << ptrArr[0] << endl;
    int size;
    cin>> size;
    ptrArr = new int[size];
    ptrArr[0] = 44;
    ptrArr[1] = 11;
    cout << ptrArr[0]<< "  " << ptrArr[1] << endl;
    delete [] ptrArr;
    cout << ptrArr[0] << "  " << ptrArr[1] << endl;
}
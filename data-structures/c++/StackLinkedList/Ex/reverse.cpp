#include <iostream>
#include <cmath>
#include "stackLinkedList.cpp"
using namespace std;

int arr[] = {1,2,3,4,5};

void reverseNum(int arr[], int size)
{
    Stack <int> reverse;
    for (int i = 0; i < size; i++)
    {
        reverse.push(arr[i]);
    }
    for (int i = 0; i < size; i++)
    {
        reverse.pop(arr[i]);
    }
}

int main(){
    for (int i = 0; i < 5; i++)
    {
        cout << arr[i] << " ";
    }
    cout<< endl;
   reverseNum(arr, 5);
   for (int i = 0; i < 5; i++)
   {
       cout<< arr[i] << " " ;
   }

}
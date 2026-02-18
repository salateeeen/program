#include <iostream>
using namespace std;

void printArray(int array[], int size)
{
  for (int i = 0; i < size; i++)
  {
    cout << array[i] << "  ";
  }
  cout << endl;
}

void swap(int &x, int &y)
{
  int temp = x;
      x = y;
      y = temp;
}

void selectionSort(int array[], int size)
{

  for (int i = 0; i < size - 1; i++)
  {
    int min = i;
    for (int j = i + 1; j < size; j++)
    {
      if (array[j] < array[min])
      {
        min = j;
      }
    }
    swap(array[min], array[i]);
  }
}

int main()
{
  int array[] = {121, 25, 23, 44, 53};
  int size = sizeof(array)/sizeof(array[0]);
  printArray(array, 5);
  selectionSort(array, 5);
  printArray(array, 5);
}
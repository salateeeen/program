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

void bubbleSort(int array[], int size)
{
    bool flag = false;
  for (int i = 0; i < size - 1; i++)
  {
    for (int j = 0; j < size-i-1 ; j++)
    {
      if (array[j] > array[j+1])
      {
        swap(array[j+1], array[j]);
        flag = true;
      }
    }
    if (flag == true)
    {
        break;
    }
  }
}

int main()
{
  int array[] = {121, 25, 23, 44, 56, 53};
  int size = sizeof(array)/sizeof(array[0]);
  printArray(array, size);
  bubbleSort(array, size);
  printArray(array, size);
}
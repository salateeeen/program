#include <iostream>
#include <string>
using namespace std;

void FillMatrixWithOrderedNumbers(int arr[3][3], short Rows, short Cols)
{
    short Counter = 0;
    for (short i = 0; i < Rows; i++)
    {
        for (short j = 0; j < Cols; j++)
        {
            Counter++;
            arr[i][j] = Counter;
        }
    }
}
void PrintMatrix(int arr[3][3], short Rows, short Cols)
{
    for (short i = 0; i < Rows; i++)
    {
        for (short j = 0; j < Cols; j++)
        {
            cout << " " << arr[i][j] << " ";
        }
        cout << "\n";
    }
}
bool scalarMatrix(int arr[3][3], short Rows, short Cols)
{
    for (short i = 0; i < Rows; i++)
    {
        for (short j = 0; j < Cols; j++)
        {
            //? diagonals
            if (i == j)
            {
                if (arr[i][j] != arr[0][0])
                {
                    return false;
                }
            }
            else if (i != j)
            {
                if (arr[i][j] != 0)
                {
                    return false;
                }
            }
        }
    }
    return true;
}

int main()
{
    int arr1[3][3] = {{9, 0, 0}, {0, 9, 0}, {0, 0, 9}};
    int arr2[3][3] = {{1, 5, 9}, {4, 1, 6}, {7, 3, 1}};

    cout << "The following is a 3x3 ordered matrix:\n";
    PrintMatrix(arr1, 3, 3);
    cout << scalarMatrix(arr1, 3, 3) << "\n";
    PrintMatrix(arr2, 3, 3);
    cout << scalarMatrix(arr2, 3, 3) << "\n";
    

    system("pause>0");
}

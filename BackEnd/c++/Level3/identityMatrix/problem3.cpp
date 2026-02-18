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
bool identityMatrix(int arr[3][3], short Rows, short Cols)
{
    for (short i = 0; i < Rows; i++)
    {
        for (short j = 0; j < Cols; j++)
        {
            //? diagonals
            if (i == j)
            {
                if (arr[i][j] != 1)
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
    int arr1[3][3] = {{1, 0, 0}, {0, 1, 0}, {0, 0, 1}};
    int arr2[3][3] = {{1, 5, 9}, {4, 1, 6}, {7, 3, 1}};
    int arr3[4][4] = {{1, 0, 0, 0}, {0, 1, 0, 0}, {0, 0, 1, 0}, {0, 0, 0, 1}};
    cout << "The following is a 3x3 ordered matrix:\n";
    PrintMatrix(arr1, 3, 3);
    cout << identityMatrix(arr1, 3, 3) << "\n";
    PrintMatrix(arr2, 3, 3);
    cout << identityMatrix(arr2, 3, 3) << "\n";
    // PrintMatrix(arr3, 4, 4);
    // cout << identityMatrix(arr3, 4, 4) << "\n";

    system("pause>0");
}

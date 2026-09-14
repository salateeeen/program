
#include<iostream>
#include <string>
#include <iomanip>
    using namespace std;
void PrintMatrix(int arr[3][3], short Rows, short Cols)
{
    for (short i = 0; i < Rows; i++)
    {
        for (short j = 0; j < Cols; j++)
        {
            // printf(" %0*d ", 2, arr[i][j]);
            cout << setw(3) << arr[i][j] << " ";
        }
        cout << "\n";
    }
}
bool IsNumberInMatrix(int Matrix1[3][3], int Number, short Rows,
                      short Cols)
{
    short NumberCount = 0;
    for (short i = 0; i < Rows; i++)
    {
        for (short j = 0; j < Cols; j++)
        {
            if (Matrix1[i][j] == Number)
            {
                return true;
            };
        }
    }
    return false;
}
int max(int Matrix[3][3], short Rows, short Cols)                                                                           
{
    int maxNumber = Matrix[0][0];
    for (short i = 0; i < Rows; i++)
    {
        for (short j = 0; j < Cols; j++)
        {
            if (Matrix[i][j] > maxNumber)
            {
                maxNumber = Matrix[i][j];
            }
        }
    }
    return maxNumber;
}
int main()
{
    int Matrix1[3][3] = {{77, 5, 12}, {22, 20, 1}, {1, 0, 9}};
    cout << "Matrix1:\n";
    PrintMatrix(Matrix1, 3, 3);
    cout << "Max:\n";
   cout<< max(Matrix1, 3, 3)<< endl;
    system("pause>0");
}
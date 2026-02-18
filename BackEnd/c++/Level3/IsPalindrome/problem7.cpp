
#include <iostream>
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
bool IsPalindrome(int Matrix[3][3], short Rows, short Cols)
{
    int colsNumber;
    for (short i = 0; i < Rows; i++)
    {
        colsNumber = Cols;
        for (short j = 0; j < Cols / 2; j++)
        {
            cout << colsNumber << endl;

            if (Matrix[i][j] != Matrix[i][--colsNumber])
            {
                return false;
            }
        }
    }
    return true;
}

int main()
{
    int Matrix1[3][3] = {{1, 2, 1}, {5, 5, 5}, {7, 3, 7}};
    int Matrix2[3][3] = {{1, 2, 1}, {5, 5, 5}, {7, 0, 12}};
    cout << "\nMatrix1:\n";
    PrintMatrix(Matrix1, 3, 3);
    if (IsPalindrome(Matrix1, 3, 3))
    {
        cout << "\nYes: Matrix is Palindrome\n";
    }
    else
        cout << "\nNo: Matrix is NOT Palindrome\n";
    cout << "\nMatrix2:\n";
    PrintMatrix(Matrix2, 3, 3);
    if (IsPalindrome(Matrix2, 3, 3))
    {
        cout << "\nYes: Matrix is Palindrome\n";
    }
    else
        cout << "\nNo: Matrix is NOT Palindrome\n";
    system("pause>0");
}

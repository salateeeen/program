#include <iostream>
#include <cmath>
using namespace std;

string allLeters()
{
    string word = "";
    int Counter = 0;
    for (int i = 65; i <= 90; i++)
    {
        for (int j = 65; j <= 90; j++)
        {
            for (int k = 65; k <= 90; k++)
            {
                word += (char)i;
                word += (char)j;
                word += (char)k;
                Counter++;
                if ("ZZZ" == word)
                {
                    cout << "Trial [" << Counter << "] : ";
                    return word;
                };
                word = "";
            }
        }
    }
}

int main()
{
    cout <<allLeters();
}

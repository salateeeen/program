#include <string>
#include <iostream>
#include <cctype>
#include <vector>
using namespace std;

string ReadString()
{
    string S1;
    cout << "Please Enter Your String?\n";
    getline(cin, S1);
    return S1;
}

void PrintFirstLetterOfEachWord(string S1)
{
    bool isFirstLetter = true;
    cout << "\nFirst letters of this string: \n";
    for (short i = 0; i < S1.length(); i++)
    {
        if (S1[i] != ' ' && isFirstLetter)
        {
            cout << S1[i] << "  ";
        }

        isFirstLetter = S1[i] == ' ' ? true : false;
    }
    cout << endl;
}

char invertChar(char c)
{
    return isupper(c) ? tolower(c) : toupper(c);
}

bool isVowel(char c)
{
    string vowels = "aeiou";
    for (int i = 0; i < vowels.size(); i++)
    {
        if (tolower(c) == vowels[i])
        {
            return true;
        }
    }
    return false;
}

void PrintEachWord(string S1)
{
    string empty = "";
    for (short i = 0; i < S1.length(); i++)
    {
        empty += S1[i];
        if (S1[i] == ' ' || i == S1.length() - 1)
        {
            cout << empty << endl;
            empty = "";
        }
    }
}
int PrintCount(string S1)
{
    int count = 0;
    for (short i = 0; i < S1.length(); i++)
    {
        if (S1[i] == ' ' || i == S1.length() - 1)
        {
            count++;
        }
    }
    return count;
}

vector<string> split(string S1, char theSpliter = ' ')
{
    string empty = "";
    vector<string> Empty;

    for (short i = 0; i < S1.length(); i++)
    {
        empty += S1[i];
        if (S1[i] == theSpliter || i == S1.length() - 1)
        {
            Empty.push_back(empty);
            empty = "";
        }
    }
    return Empty;
}

void printVector(vector<string> V)
{
    for (string &v : V)
    {
        cout << v << "  ";
    }
    cout << endl;
}

int main()
{
    cout << isVowel('a') << " ";
    cout << isVowel('A') << " ";
    cout << isVowel('r') << endl;
    PrintEachWord("sultan omar abdulraheem");
    cout << PrintCount("sultan omar abdulraheem") << endl;
    printVector(split("sultan omar abdulraheem"));
    printVector(split("sultan omar abdulraheem", 'a'));
    system("pause>0");
}

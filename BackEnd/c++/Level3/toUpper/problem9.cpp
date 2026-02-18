#include <string>
#include <iostream>
#include <cctype>
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

void toUpperFirstLetters(string S1)
{
    bool isFirstLetter = true;

    cout << "\nto upper First letters of this string: \n";
    for (short i = 0; i < S1.length(); i++)
    {
        if (S1[i] != ' ' && isFirstLetter)
        {
            S1[i] = toupper(S1[i]);
        }

        isFirstLetter = S1[i] == ' ' ? true : false;
    }
    cout << S1 << endl;
}

void toUpperAllString(string S1)
{
    cout << "\nto upper string: \n";
    for (short i = 0; i < S1.length(); i++)
    {
        S1[i] = toupper(S1[i]);
    }
    cout << S1 << endl;
}

char invertChar(char c)
{
    return isupper(c) ? tolower(c) : toupper(c);
}

void invertString(string S1)
{
    cout << "\nto upper string: \n";
    for (short i = 0; i < S1.length(); i++)
    {
        S1[i] = invertChar(S1[i]);
    }
    cout << S1 << endl;
}

int countSmall(string S1)
{
    short count = 0;
    for (short i = 0; i < S1.length(); i++)
    {
        if (islower(S1[i]))
        {
            count++;
        }
    }
    return count;
}

int countCapital(string S1)
{
    short count = 0;
    for (short i = 0; i < S1.length(); i++)
    {
        if (isupper(S1[i]))
        {
            count++;
        }
    }
    return count;
}

//$ default parameter
int countletter(string S1, char c = 'a', bool matchCase = true)
{
    short count = 0;

    if (matchCase)
    {
        for (short i = 0; i < S1.length(); i++)
        {
            if (S1[i] == c)
            {
                count++;
            }
        }
    }
    else
    {
        for (short i = 0; i < S1.length(); i++)
        {
            if (tolower(S1[i]) == tolower(c))
            {
                count++;
            }
        }
    }
    return count;
}

int main()
{
    PrintFirstLetterOfEachWord("sultan omar");
    toUpperFirstLetters("sultan omar");
    toUpperAllString("sultan omar");

    cout << invertChar('t') << endl;
    cout << invertChar('T') << endl;

    invertString("sULtaN OmAr");

    cout << countSmall("sULtAN OmAr") << endl;
    cout << countCapital("sULtAN OmAr") << endl;

    cout << countletter("sultan omar") << endl;
    cout << countletter("sultan omar", 's') << endl;

    cout << countletter("sULtAN OmAr", 'a', false) << endl;
    cout << countletter("sULtAN Omar", 'a') << endl;

    system("pause>0");
}

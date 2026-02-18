#include <string>
#include <iostream>
#include <cctype>
#include <vector>
using namespace std;
string TrimLeft(string S1)
{
    for (short i = 0; i < S1.length(); i++)
    {
        if (S1[i] != ' ')
        {
            return S1.substr(i, S1.length() - i);
        }
    }
    return "";
}
string TrimRight(string S1)
{
    for (short i = S1.length() - 1; i >= 0; i--)
    {
        if (S1[i] != ' ')
        {
            return S1.substr(0, i + 1);
        }
    }
    return "";
}
string Trim(string S1)
{
    return (TrimLeft(TrimRight(S1)));
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
            Empty.push_back(Trim(empty));
            empty = "";
        }
    }
    return Empty;
}

string join(vector<string> V, string theJoiner = "")
{
    string empty = "";

    for (string &v : V)
    {
        empty = empty + v + theJoiner;
    }
    return empty.substr(0, empty.size()-theJoiner.size());
}

void printVector(vector<string> V)
{
    for (string &v : V)
    {
        cout << v<< " ";
    }
    cout << endl;
}

int main()
{
    printVector(split("sultan omar abdulraheem"));
    cout << join(split("sultan omar abdulraheem")) << endl;
    cout << join(split("sultan omar abdulraheem", 'a'), "(|)") << endl;

    system("pause>0");
}

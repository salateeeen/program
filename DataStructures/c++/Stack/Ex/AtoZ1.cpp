#include <iostream>
#include <stack>
#include <string>

std::stack<char> A, B, C;  // تعريف المكدسات A و B و C

void pushElement(const std::string &word)
{
    int i = 0;
    while (i < word.size() && word[i] != '$')
    {
        if (word[i] == 'A' || word[i] == 'a')
        {
            i++;  // التقدم إلى الحرف التالي بعد 'A' أو 'a'
            while (i < word.size() && word[i] != '#' && word[i] != '$')
            {
                A.push(word[i]);
                i++;
            }
        }
        else if (word[i] == 'B' || word[i] == 'b')
        {
            i++;  // التقدم إلى الحرف التالي بعد 'B' أو 'b'
            while (i < word.size() && word[i] != '#' && word[i] != '$')
            {
                B.push(word[i]);
                i++;
            }
        }
        else if (word[i] == 'C' || word[i] == 'c')
        {
            i++;  // التقدم إلى الحرف التالي بعد 'C' أو 'c'
            while (i < word.size() && word[i] != '#' && word[i] != '$')
            {
                C.push(word[i]);
                i++;
            }
        }
        else
        {
            i++;  // إذا لم يكن الحرف 'A' أو 'B' أو 'C'، تقدم إلى الحرف التالي
        }
    }
}

int main()
{
    std::string word = "Axyz#Bmnop#Cpqr$";
    pushElement(word);

    // طباعة محتويات كل مكدس
    std::cout << "Stack A: ";
    while (!A.empty()) {
        std::cout << A.top();
        A.pop();
    }
    std::cout << "\n";

    std::cout << "Stack B: ";
    while (!B.empty()) {
        std::cout << B.top();
        B.pop();
    }
    std::cout << "\n";

    std::cout << "Stack C: ";
    while (!C.empty()) {
        std::cout << C.top();
        C.pop();
    }
    std::cout << "\n";

    return 0;
}

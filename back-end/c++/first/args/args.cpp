#include <iostream>
#include <vector>
using namespace std;

void runner (void * param);

int main(int argc, char* argv[])
{
    runner(argv[1]);
    cout << endl << argv[1]<<endl;
}

void runner (void* param) {
    cout << atoi(param) << endl;
    cout << param <<endl;
}
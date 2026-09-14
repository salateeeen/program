#include <iostream>
#include <vector>
using namespace std;

class stackAndHeap
{
public:
    string name = "sultan";
};

int main(){
    // # creat obgect in stack
    stackAndHeap s;
    cout << "stack.  " << s.name << endl<< endl;
         
 
    // # new creat obgect in heap
    // # *H to reach heap's element from stack
    stackAndHeap *h = new stackAndHeap();
    cout << "heap->  " << h->name << endl<< endl;
         
}
#include <iostream>
using namespace std;

class date {

public:
    date();
    date(int, int, int);
    void print() { cout << d << "\t" << m << "\t" << y << endl; }
    int d, m, y;

};

date::date(int a, int b, int c)
{
    d = a; 	m = b; 	y = c;
}

void fun(date x, date& y, date* z)
{
    x.d += 2; x.m += 2; x.y += 2;

    y.d += 2; y.m += 2; y.y += 2;

    z->d += 9; z->m += 9; z->y += 9;
}

date special_function(date& ob)
{
    ob.d++;
    ob.m++;
    ob.y++;

    return ob;
}
int main()
{
    date a(10, 10, 10);
    date b(20, 20, 20);
    date c(30, 30, 30);
    date* d = &c; // d is not an object, it is a pointer to object c

    fun(a, b, d);
    a.print();
    b.print();
    c.print();
    d->print();

    date e(2, 4, 6);
    e.print();
    date f = special_function(e);
    f.print();

    return 0;
}

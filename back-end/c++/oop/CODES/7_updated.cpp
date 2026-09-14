/**************************************************
//  COMPOSITION: SYNTAX, CONSTRUCTORS, DESTRUCTORS
*************************************************/
#include <string>
#include <iostream>
#include <new>
#include <cstdlib>
using namespace std;

class CPU
{
	string vender;
	long speed;
	int cores;
public:
	CPU(string v, long s, int c) :vender(v), speed(s), cores(c) {}
	CPU(const CPU& a) { vender = a.vender; speed = a.speed; cores = a.cores; cout << "Copy constructor of CPU class\n"; }
	~CPU()
	{
		cout << "Destructor for the processor "<< vender<< "\t" << speed << "\n";
	}
	void set_specs(char* v, long s, int c)
	{
		vender = v;
		speed = s;
		cores = c;
	}
	void get_cpu_spects()
	{
		cout << "CPU specs: " << "\n" << "Vender : " << vender << "\tSpeed : " << speed << "\tNumber of cores : " << cores << endl;
		cout << "**************\n";
	}
};
class MEMORY
{
	string technology;
	long capacity;
	bool multiple_slots;
public:
	MEMORY(string t, long c, bool m) :technology(t), capacity(c), multiple_slots(m) {}
	MEMORY(const MEMORY& a) { technology = a.technology; capacity = a.capacity; multiple_slots = a.multiple_slots; cout << "Copy constructor of MEMORY class\n"; }
	~MEMORY()
	{
		cout << "Destructor for the memory " << technology << "\t" << capacity << "\n";
	}

	void set_specs(char* t, long c, bool m)
	{
		technology = t;
		capacity = c;
		multiple_slots = m;

	}

	void ppprinf(){cout<<"wtd";}
	void get_memory_specs()
	{
		cout << "memory specs: " << "\n" << "Tecgnology : " << technology << "\tCapacity : " << capacity << "\tMultiple slots ? : " << (multiple_slots ? "YES" : "NO") << endl;
		cout << "**************\n";
	}
};
class IO
{
	bool mouse;
	bool keyboard;
	bool screen;
public:
	IO(bool m, bool k, bool s) :mouse(m), keyboard(k), screen(s) {}
	IO(const IO& a) { mouse = a.mouse; keyboard = a.keyboard; screen = a.screen; cout << "Copy constructor of IO class\n"; }
	~IO()
	{
		cout << "Destructor for the io " << endl;
	}
	void set_specs(bool m, bool k, bool s)
	{
		mouse = m;
		keyboard = k;
		screen = s;
	}
	void pppprint(){
	cout<<endl<<endl<<"opb.dm succ"<<endl<<endl;}
	void get_io_specs()
	{
		cout << "IO specs: " << "\n" << "Mouse attached ? " << (mouse ? "YES" : "NO") << "\tKeyboard attached ? " << (keyboard ? "YES" : "NO") << "\tScreen attached ? " << (screen ? "YES" : "NO") << endl;
		cout << "**************\n";
	}
};
class computer {
	long cost;
	bool used;
public:
	IO io;
	MEMORY memory;
	CPU cpu;
	MEMORY* MEMpointer;
	computer(long c, CPU& cp, MEMORY& m, bool u, IO& i) :cost(c), cpu(cp), io(i), used(u), memory(m) { MEMpointer = &m;cout << "Constructor of container is being invoked \n"; }
	void print(){
	cout<<cost;
	
	}
	~computer() { cout << "Destructor of container is being invoked \n"; }
};

int main()
{
	CPU c1("Intel", 2400, 4);
	CPU c2("AMD", 2100, 2);

	MEMORY m1("DDR 2", 4000, true);
	MEMORY m2("DDR 2", 2000, false);

	IO i1(true, true, true);
	IO i2(true, true, false);

	computer pc(500, c1, m2, 0, i2);
	computer* p = &pc;

	i1.pppprint();

	p->cpu.get_cpu_spects(); cout<<endl<<"400 4"<<endl<<endl;
	p->MEMpointer->get_memory_specs();//p->memory.get_memory_specs();
	pc.io.get_io_specs();

		system("pause");
		return 0;
}


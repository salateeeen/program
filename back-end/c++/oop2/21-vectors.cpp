/*******************************
// Application using Vectors
********************************/

#include<iostream>
#include<cstdlib>
#include<ctime>
#include<vector>
using namespace std;

class point
{
public:
	point()
	{
		x = rand() % 100;
		y = 100 + rand() % 100;
		z = 200 + rand() % 100;
	}
	int get_x() { return x; }
	int get_z() { return z; }
	void print_dim()
	{
		cout << "Object with X=  " << x << "\t" << "Y=  " << y << '\t' << " Z=  " << z << endl;
	}
private:
	int x, y, z;
};

void bubble_sort(vector<point>& V)
{
	for (unsigned i = 1; i < V.size(); i++)
		for (unsigned j = 0; j < V.size() - 1; j++)
		{
			if (V[j].get_z() > V[j + 1].get_z())
			{// swap the two items
				point temp = V[j];
				V[j] = V[j + 1];
				V[j + 1] = temp;
			}
		}
}
int largest(vector<point>& T)
{
	int index = 0;
	for (unsigned i = 1; i < T.size(); i++)
	{
		if (T[i].get_x() > T[index].get_x())
			index = i;
	}
	return index;
}
int main()
{
	srand(time(0));
	vector<point> vector_of_objects;
	point* p = new point[10]; // create 10 objects of class poiny
	for (int i = 0; i < 5; i++)
		vector_of_objects.push_back(p[rand() % 10]);
	//search for the object with the largest x dimension
	cout << "The object stored in the index " << largest(vector_of_objects) << "  has the largest x value" << endl;


	for (unsigned i = 0; i < vector_of_objects.size(); i++)
		vector_of_objects[i].print_dim();

	//sort the vector elements according to the z values

	bubble_sort(vector_of_objects);
	cout << "\n\n\n";

	for (unsigned i = 0; i < vector_of_objects.size(); i++)
		vector_of_objects[i].print_dim();

	return 0;
}



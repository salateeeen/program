/********************************************
// Standared Template Library (STL): vector
********************************************/

#include<iostream>
#include<vector> // Template for class vector
using namespace std;

void main()
{
	vector<char> char_vector;// define an empty vector

	char ar[] = "Data Structure";

	unsigned int i = 0; // i is declared unsinged because it is 
	//compated with vector size() function which returns unsinged size
	while (ar[i])
	{
		
		char_vector.push_back(ar[i]);//inserts an item at the back of the vector
		i++;
	}

	for (i = 0; i < char_vector.size(); i++)
		cout << char_vector[i] << " ";

	cout << endl;


	vector<char>::iterator point = char_vector.begin();//assign the pointer to the first element in the vector

	char_vector.insert(point, 3, '-');//insert three - at the position pointed by the pointer point

	point = char_vector.end();

	char_vector.insert(point, 3, '-');

	for (i = 0; i < char_vector.size(); i++)
		cout << char_vector[i] << " ";

	cout << "\n\n\n";

	for (i = 0; i < 3; i++)
		char_vector.pop_back();// removes an item from the back of the vector

	point = char_vector.begin(); // reallocate the pointer to the start of the vector

	char_vector.erase(point, point + 3); // erase 3 elements from the start of the vector


	for (i = 0; i < char_vector.size(); i++)
		cout << char_vector[i] << " ";

	
}

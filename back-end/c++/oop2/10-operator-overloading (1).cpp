/*****************************************
//Operator Overloading : complete Example
*****************************************/


#include <iostream>
#include<iomanip>
using std::cout;
using std::endl;
using std::cin;
using std::istream;
using std::ostream;
using std::setw;

class mobile_num {

	int country_code, num_prefix, num_postfix;
public:
	mobile_num() { country_code = num_prefix = num_postfix = 0; }
	mobile_num(int x1, int y1, int z1) :country_code(x1), num_prefix(y1), num_postfix(z1) {}

	int operator[](int part); // overloading the [] operator as member function

	friend ostream& operator<<(ostream& output, const mobile_num& no) // overloading the extraction operator
	{
		output << '+' << no.country_code << '-' << no.num_prefix << '-' << no.num_postfix;
		//to allow cascaded printing , we must return an object of ostream
		return output;
	}

	friend istream& operator>>(istream& input, mobile_num& no) // overloading the insertion operator
	{
		input.ignore(1);
		input >> setw(3) >> no.country_code; // friend function must access the data members as object_name.member_name

		input.ignore(1);
		input >> setw(2) >> no.num_prefix;
		input.ignore(1);
		input >> setw(3) >> no.num_postfix;

		return input;
	}

	mobile_num& operator=(const mobile_num Left_side)//must overload the = operator as member function
	{
		country_code = Left_side.country_code;
		num_prefix = Left_side.num_prefix;
		num_postfix = Left_side.num_postfix;

		return *this;
	}

	friend bool operator==(const mobile_num R, const mobile_num L);//as global function

}; // End class


int mobile_num::operator[](int part)
// must overload the [] operator as member function
// member function access the data members directly without using //object_name.member_name
{
	if (part > -1 && part < 3) // range checking
	{
		if (part == 0)
			return country_code;
		else if (part == 1)
			return num_prefix;
		else
			return num_postfix;
	}
	else // for incorrect index
		return country_code;
}

bool operator==(const mobile_num Right, const mobile_num Left)// this function //needs to access the private date
//therefore we can define it as member or friend function
{
	return (Right.country_code == Left.country_code && Right.num_postfix == Left.num_postfix && Right.num_prefix == Left.num_prefix);
}

bool operator!=(const mobile_num R, const mobile_num L)
//this function calls the == operator and does not require to access the private data, so it is declared as global function
{
	return !(R == L);
}
int main()
{
	mobile_num mob1(962, 79, 6862314);
	mobile_num mob2(962, 78, 6462222);
	mobile_num mob3(962, 77, 6005005);

	cout << mob2 << endl; // calls the overloaded operator<<

	mobile_num mob4; // calls the default constructor and initialize the number to // +0-0-0

	cin >> mob4;// calls the overloaded operator>>


	mob1 = mob2 = mob4; // calls the overloaded operator== twise
	//first call format mob2.operator+(mob4)
	//second call format mob1.operator+(mob2)

	cout << mob4 << "\t" << mob2 << "\t" << mob1 << endl;

	cout << mob1[0] << "\t" << mob3[1] << "\t" << mob4[3] << endl; //calls the operator[] //function 3 times
	//first call mob1.operator[0]
	//second call mob3.operator[1]
	//third call mob4.operator[3]

	cout << (mob1 == mob3) << endl;
	cout << (mob1 != mob2) << endl;

	return 0;
}

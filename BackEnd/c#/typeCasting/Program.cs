using System;
using System.Linq;

namespace ConsoleApp
{
    public class Program
    {
        public static void Main(string[] args)
        {

            //? Implicit Casting (automatically) - converting a smaller type to a larger type size
            //* char -> int -> long -> float -> double

            //? Explicit Casting (manually) - converting a larger type to a smaller size type
            //* double -> float -> long -> int -> char

            int myInt = 20;
            double myDouble = 7.25;
            bool myBool = true;
            char myChar = (char)100.5;

            Console.WriteLine(Convert.ToString(myInt));
            Console.WriteLine(Convert.ToDouble(myInt));
            Console.WriteLine(Convert.ToInt32(myDouble));
            Console.WriteLine(Convert.ToInt32(myBool));
            Console.WriteLine(Convert.ToString(myBool));
            Console.WriteLine(myChar);

            //* small to BIG  automatically
            char a = 'a';
            int i = a;
            Console.WriteLine(i);

            //& BIG to small  manually
            int j = 115;
            char s = (char)j;
            Console.WriteLine(s);
        }
    }
}
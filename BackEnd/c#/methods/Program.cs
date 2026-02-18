//ProgrammingAdvices.com
//Mohammed Abu-Hadhoud

using System;


namespace Main
{
    internal class Program
    {

        static void StaticPrintMyName()
        {
            Console.WriteLine("Mohammed Abu-Hadhoud");
        }

        static void MyMethod(string child1, string child2, string child3)
        {
            Console.WriteLine("The youngest child is: " + child3);
        }

        static int add(int num1, int num2)
        {
            return num1 + num2;
        }
        static int add(int num1, int num2, int num3)
        {
            return num1 + num2 + num3;
        }

        void PrintMyName()
        {
            Console.WriteLine("Mohammed Abu-Hadhoud");
        }

        static void Main(string[] args)
        {
            Program p = new Program();
            p.PrintMyName();
            StaticPrintMyName();
            //# order is not important
            MyMethod(child3: "none", child1: "layla", child2: "elias");
            //# overloading
            Console.WriteLine(add(1, 2));
            Console.WriteLine(add(1, 2, 3));

            Console.ReadKey();


        }
    }
}
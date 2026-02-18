using System;

namespace ConsoleApp
{
    public class Program
    {
        enum enCategories
        {
            Electronics,    // 0
            Food,           // 1
            Automotive = 6, // 6
            Arts,           // 7
            BeautyCare,     // 8
            Fashion         // 9
        }
        struct structName
        {
            public string Name;
            public byte age;
        }
        public static void Main(string[] args)
        {
            byte b = 4;
            sbyte sb = 4;
            Console.WriteLine(b + "  " + sb);
            Console.WriteLine(byte.MaxValue + "  " + sbyte.MaxValue + "\n");

            short s = 8;
            ushort us = 8;
            Console.WriteLine(s + "  " + us);
            Console.WriteLine(short.MaxValue + "  " + ushort.MaxValue + "\n");

            int i = 16;
            uint ui = 16;
            Console.WriteLine(i + "  " + ui);
            Console.WriteLine(int.MaxValue + "  " + uint.MaxValue + "\n");

            long l = 32;
            ulong ul = 32;
            Console.WriteLine(l + "  " + ul);
            Console.WriteLine(long.MaxValue + "  " + ulong.MaxValue + "\n");

            int hex = 0x111;
            Console.WriteLine(hex);
            int bin = 0b_111;
            Console.WriteLine(bin);

            char defChar = default;
            Console.WriteLine(defChar + "\n");

            int defInt = default;
            Console.WriteLine(defInt + "\n");

            bool defBool = default;
            Console.WriteLine(defBool + "\n");

            Console.WriteLine(((byte)enCategories.Arts) + "\n");

            structName sultan = new structName();
            // sultan.Name = "sultan";
            sultan.age = 21;
            Console.WriteLine(sultan.Name); /// null 

            structName sultanError;
            // sultanError.Name = "sultan";
            sultanError.age = 21;
            // Console.WriteLine(sultanError.Name); //! error 


            dynamic dyn = 10;
            Console.WriteLine(dyn);

            dyn = "sultan";
            Console.WriteLine(dyn);

            Console.WriteLine($"my name is {dyn}");

        }
    }
}
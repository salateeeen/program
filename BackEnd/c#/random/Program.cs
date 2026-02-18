using System;
using System.Linq;

namespace first
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var rnd = new Random();

            for (int j = 0; j < 4; j++)
            {
                Console.WriteLine(rnd.Next(10, 20)); // 10 - 19;
            }
        }
    }
}
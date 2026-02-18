using System;
using System.Linq;

namespace ConsoleApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            int[] nums = { 1, 2 };
            nums[1] = 3;
            //! nums[2] = 4;  error out of bounds because we decclare in 2 items

            foreach (int num in nums)
                Console.Write(num+ " ");
                Console.WriteLine();

            int[] numbers = { 51, -200, 2, 14, 18, 40, 178 };
            var arrInit = new int[5] {1, 2, 3, 4, 5};
            foreach (var item in arrInit)
            {
                Console.Write(item + " ");
            }
            Console.WriteLine();

            //? just when using using System.Linq 
            Console.WriteLine("Smallest  Element: " + numbers.Min());
            Console.WriteLine("Largest Element: " + numbers.Max());
            Console.WriteLine("Count : " + numbers.Count());
            Console.WriteLine("Sum : " + numbers.Sum());
            Console.WriteLine("Average: " + numbers.Average());

            //? class math
            Console.WriteLine("Round of 9.99 is: {0}", Math.Round(9.99));

        }
    }
}
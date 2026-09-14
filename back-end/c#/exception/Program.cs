using System;

namespace ConsoleApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            try
            {
                if (true)
                throw new Exception("sultan");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

             try
            {
                int[] myNumbers = { 1, 2, 3 };
                Console.WriteLine(myNumbers[10]);
            }
            catch (Exception e)
            {
                Console.WriteLine("e.Message");
            }
        }
    }
}
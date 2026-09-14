using System;

namespace Class
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            Test T = new Test(2231413, "sultan");
            Console.WriteLine("###This###");
            Console.WriteLine(T.Name);
            Console.WriteLine(T.ID);
            Indexer I = new Indexer();
            Console.WriteLine("###Indexer###");
            I["name"] = "sultan";
            Console.WriteLine(I["name"]);
            methods M = new methods();
            Console.WriteLine("###Methods###");
            Console.WriteLine(M.Sum(1, 3, 4, 5));
            Console.WriteLine(M.Sum([1, 3, 4, 5]));
            //? violations
            // Console.WriteLine(M.Param(new int[]{1,2,3}));
        }
    }
}
namespace Interface
{

    class Run : IBase
    {
        public void Name()
        {
            Console.WriteLine("Run");
        }
    }

    class Cycle : IBase
    {
        public void Name()
        {
            Console.WriteLine("Cycle");
        }
        public void Best()
        {
            Console.WriteLine("sultan is the best");
        }

    }
}
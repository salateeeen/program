namespace Inheritance
{
    public class Derived : Base
    {
        public Derived(int ID) : base(ID)
        {

            Console.WriteLine(ID + "  Derived");
        }
        public void printDerived()
        {
            Console.WriteLine("printDerived");
        }

        public override void OverRide()
        {
            Console.WriteLine("OR2");
        }

        public override string ToString()
        {
            return "print from to string";
        }

    }
}
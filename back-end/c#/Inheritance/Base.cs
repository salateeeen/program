namespace Inheritance
{
    public class Base
    {
        private int _id;
        public Base(int ID)
        {
            this._id = ID;
            Console.WriteLine(this._id + "  Base");
        }
        public void printBase()
        {
            Console.WriteLine("printBase");
        }

        public virtual void OverRide()
        {
            Console.WriteLine("OR1");
        }

    }
}
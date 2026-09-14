using Interface;

class Program
{
    public static void Extensablity(IBase b)
    {
        b.Name();
    }
    public static void Main(string[] args)
    {
        //! IBase b = new IBase();  can not creat instace from interface
        IBase b = new Cycle();
        /// we use it with extensibility pass multiple implements to the same interface`s methode
        Extensablity(new Run());
        //# change a behavior without change the code
        Extensablity(new Cycle());
    }

}
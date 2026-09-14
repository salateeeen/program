using System;
using Inheritance;
public class Program
{
  public static void Main(string[] args)
  {
    /// Base constructer is always executed first
    // Derived d = (Derived) new Base(2231413);
    Base b = new Derived(2231413);

    Derived d2 = new(34);
    Base b2 = new(27);

    ///upCasting 
    b.printBase(); //? just Base methods
                   // d.printDerived(); //# in casting print derived and base 

    b2.OverRide();
    d2.OverRide();
    Console.WriteLine(d2.ToString());
  }
}
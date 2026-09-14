using System;

namespace Apstract
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //! var b = new Base(); (ABSTRACT)
            var d = new Derived();
            d.Draw();
            Math.Abs(4);
        }
    }
}
using System;

namespace ConsoleApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //% 01/01/0001 00:00
            DateTime dt = new DateTime();
            Console.WriteLine(dt);
            Console.WriteLine(dt.Ticks);

            //% now
            DateTime dt1 = DateTime.Now;
            //? 10M ticks in second
            Console.WriteLine(dt1);
            Console.WriteLine(dt1.Ticks);

            DateTime todaysDate = DateTime.Today; //& returns today's date
            DateTime currentDateTimeUTC = DateTime.UtcNow;//& returns current UTC date and time
            DateTime maxDateTimeValue = DateTime.MaxValue; //& returns max value of DateTime
            DateTime minDateTimeValue = DateTime.MinValue; //& returns min value of DateTime

            Console.WriteLine("Today: " + todaysDate);
            Console.WriteLine("currentDateTimeUTC: " + currentDateTimeUTC);
            Console.WriteLine();
            Console.WriteLine("minDateTimeValue: " + minDateTimeValue);
            Console.WriteLine("maxDateTimeValue: " + maxDateTimeValue);

            Console.WriteLine();
            Console.WriteLine();

            DateTime DT = new DateTime(2023, 2, 21);
            /// Hours, Minutes, Seconds
            TimeSpan TS = new TimeSpan(49, 25, 34);
            Console.WriteLine(TS);
            Console.WriteLine(TS.Days + " days");
            Console.WriteLine(TS.Hours + " hours");
            Console.WriteLine(TS.Minutes + " minutes");
            Console.WriteLine(TS.Seconds + " seconds");

            /// this will add time span to the date.
            Console.WriteLine("----");
            Console.WriteLine("ADD");
            DateTime newDate = DT.Add(TS);
            Console.WriteLine(newDate);

            Console.WriteLine();

            DateTime dtSub1 = new DateTime(2021, 2, 21);
            DateTime dtSub2 = new DateTime(2023, 2, 25);
            TimeSpan TSub = new TimeSpan(6);
            DateTime dtSub3 = dtSub1.Add(TSub);
            
            Console.WriteLine("----");
            Console.WriteLine("SUB");
            TimeSpan result = dtSub2.Subtract(dtSub3);
            Console.WriteLine(result);


            Console.WriteLine();


            DateTime dt3 = new DateTime(2015, 12, 20);
            DateTime dt4 = new DateTime(2016, 12, 31, 5, 10, 20);
            TimeSpan time = new TimeSpan(10, 5, 25, 50);
            Console.WriteLine(dt3);
            Console.WriteLine(dt4);
            Console.WriteLine(time);
            Console.WriteLine(dt4 + time); // 1/10/2017 10:36:10 AM
            Console.WriteLine(dt4 - dt3); //377.05:10:20
            Console.WriteLine(dt3 == dt4); //False
            Console.WriteLine(dt3 != dt4); //True
            Console.WriteLine(dt3 > dt4); //False
            Console.WriteLine(dt3 < dt4); //True
            Console.WriteLine(dt3 >= dt4); //False
            Console.WriteLine(dt3 <= dt4); //True

        }
    }
}
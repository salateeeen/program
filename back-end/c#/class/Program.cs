using System;

namespace Class
{
    public class Test
    {
        /// creat a praivate variables implicitly
        public int ID { get; private set;}
        public string Name { get; }
        public Test(int ID)
        {
            this.ID = ID;
        }
        /// this(ID) to call a contructor
        public Test(int ID, string Name) : this(ID)
        {
            this.Name = Name;
        }

    }
}
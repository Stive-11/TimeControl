using System;

namespace TimeControl.Models
{
    public class Responses
    {
        public class TableTask
        {
            public int Id { get; set; }

            public string Name { get; set; }

            public float Time { get; set; }

            public DateTime Date { get; set; }

            public string Worker { set; get; }

            public string Project { set; get; }
        }
    }
}
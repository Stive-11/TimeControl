using System;

namespace TimeControl.Models
{
    public class Requests
    {
        public class Report
        {
            public DateTime StartTime { set; get; }
            public DateTime FinishTime { set; get; }
        }
    }
}
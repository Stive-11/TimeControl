using System.Collections.Generic;

namespace TimeControl.Models
{
    public class Reports
    {
        public class Projects
        {
            public List<Project> ListProjects { set; get; }
        }

        public class Workers
        {
            public List<Worker> ListWorkers { set; get; }
        }

        public class ProjectCountsWorkers
        {
            public List<ProjectCountWorkers> ListProjectsCountWorkerses { set; get; }
        }

        public class Project
        {
            public string Name { set; get; }
            public float Time { set; get; }
        }

        public class Worker
        {
            public string Name { set; get; }
            public float Time { set; get; }
        }

        public class ProjectCountWorkers
        {
            public string Name { set; get; }
            public int Count { set; get; }
        }
    }
}
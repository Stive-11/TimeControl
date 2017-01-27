using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using TimeControl.Data;
using TimeControl.Models;

namespace TimeControl.Services
{
    public class ReportCreator : IReportCreator
    {
        private readonly ApplicationDbContext _context;

        public ReportCreator(ApplicationDbContext context)
        {
            _context = context;
        }

        public Reports.Projects GetProjects(Requests.Report dates)
        {
            var tasks = GetTasks(dates);
            var report = new Reports.Projects
            {
                ListProjects = new List<Reports.Project>()
            };
            var projects = _context.Projects.Select(p => p).ToArray();

            foreach (var project in projects)
            {
                var time = tasks.Where(t => t.ProjectId == project.Id).Sum(p => p.Time);
                report.ListProjects.Add(new Reports.Project
                {
                    Time = time,
                    Name = project.Name
                });
            }

            return report;
        }

        public Reports.Workers GetWorkers(Requests.Report dates)
        {
            var tasks = GetTasks(dates);
            var report = new Reports.Workers()
            {
                ListWorkers = new List<Reports.Worker>()
            };

            if (tasks.Any())
            {
                var workers = _context.Workers.Select(w => w).ToArray();
                foreach (var worker in workers)
                {
                    var time = tasks.Where(w => w.WorkerId == worker.Id).Sum(p => p.Time);
                    report.ListWorkers.Add(new Reports.Worker
                    {
                        Time = time,
                        Name = worker.Name
                    });
                }
            }
            return report;
        }

        public Reports.ProjectCountsWorkers GetProjectCountsWorkers(Requests.Report dates)
        {
            var tasks = GetTasks(dates);
            var report = new Reports.ProjectCountsWorkers
            {
                ListProjectsCountWorkerses = new List<Reports.ProjectCountWorkers>()
            };

            if (!tasks.Any())
                return report;

            var projects = _context.Projects.Select(p => p).ToArray();
            foreach (var project in projects)
            {
                report.ListProjectsCountWorkerses.Add(new Reports.ProjectCountWorkers
                {
                    Name = project.Name,
                    Count = tasks.Count(t => t.ProjectId == project.Id)
                });
            }

            return report;
        }

        private IEnumerable<Db.Task> GetTasks(Requests.Report dates)
        {
            if (dates == null)
            {
                return _context.Tasks.Select(t => t).ToArray();
            }
            
            var finishTime = dates.FinishTime.AddDays(1).AddMilliseconds(-1);
            return _context.Tasks.Where(p => p.Date >= dates.StartTime && p.Date <= finishTime).ToArray();
        }
    }
}
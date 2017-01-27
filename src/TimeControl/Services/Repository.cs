using System;
using System.Collections.Generic;
using System.Linq;
using TimeControl.Data;
using TimeControl.Models;

namespace TimeControl.Services
{
    public class Repository : IRepository
    {
        private readonly ApplicationDbContext _context;

        public Repository(ApplicationDbContext context)
        {
            _context = context;
        }

        public void AddTask(Db.Task task)
        {
            try
            {
                _context.Tasks.Add(task);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw new Exception("Task could not be added");
            }
        }

        public void DeleteTask(int idTask)
        {
            try
            {
                var foundTask = _context.Tasks.FirstOrDefault(p => p.Id == idTask);

                if (foundTask == null)
                    throw new Exception("Task could not be deleted");

                _context.Tasks.Remove(foundTask);
                _context.SaveChanges();
                return;
               
            }
            catch (Exception)
            {
                throw new Exception("Task could not be deleted");
            }
        }

        public void UpdateTask(Db.Task task)
        {
            try
            {
                var foundTask = _context.Tasks.FirstOrDefault(p => p.Id == task.Id);

                if (foundTask == null)
                    throw new Exception("Task could not be updated");

                foundTask.Time = task.Time;
                _context.Tasks.Update(foundTask);
                _context.SaveChanges();

                throw new Exception("Task could not be updated");
            }
            catch (Exception)
            {
                throw new Exception("Task could not be updated");
            }
        }

        public void AddProject(Db.Project project)
        {
            try
            {
                _context.Projects.Add(project);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw new Exception("Project could not be added");
            }
        }

        public void AddWorker(Db.Worker worker)
        {
            try
            {
                _context.Workers.Add(worker);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw new Exception("Worker could not be added");
            }
        }

        public IEnumerable<Db.Project> GetProjects()
        {
            return _context.Projects.Select(p => p).ToArray();
        }

        public IEnumerable<Db.Worker> GetWorkers()
        {
            return _context.Workers.Select(w => w).ToArray();
        }

        public IEnumerable<Responses.TableTask> GetTasks()
        {
            return _context.Tasks.Select(t => new Responses.TableTask
            {
                Id = t.Id,
                Name = t.Name,
                Project = t.Project.Name,
                Worker = t.Worker.Name,
                Date = t.Date,
                Time = t.Time
            }).ToArray();
        }

        public IEnumerable<Responses.TableTask> GetTasks(Requests.Report dates)
        {
            var finishTime = dates.FinishTime.AddDays(1).AddMilliseconds(-1);
            return _context.Tasks
                    .Select(t => new Responses.TableTask
                    {
                        Id = t.Id,
                        Name = t.Name,
                        Project = t.Project.Name,
                        Worker = t.Worker.Name,
                        Date = t.Date,
                        Time = t.Time
                    })
                    .Where(p => p.Date >= dates.StartTime && p.Date <= finishTime)
                    .ToArray();
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TimeControl.Models;

namespace TimeControl.Services
{
    public interface IRepository
    {
        void AddTask(Db.Task task);
        void DeleteTask(int idTask);
        void UpdateTask(Db.Task task);
        void AddProject(Db.Project project);
        void AddWorker (Db.Worker worker);

        IEnumerable<Db.Project> GetProjects();
        IEnumerable<Db.Worker> GetWorkers();
        IEnumerable<Db.Task> GetTasks();
        IEnumerable<Db.Task> GetTasks(Requests.Report dates);
    }
}

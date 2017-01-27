using System.Collections.Generic;
using TimeControl.Models;

namespace TimeControl.Services
{
    public interface IRepository
    {
        void AddTask(Db.Task task);

        void DeleteTask(int idTask);

        void UpdateTask(Db.Task task);

        void AddProject(Db.Project project);

        void AddWorker(Db.Worker worker);

        IEnumerable<Db.Project> GetProjects();

        IEnumerable<Db.Worker> GetWorkers();

        IEnumerable<Responses.TableTask> GetTasks();

        IEnumerable<Responses.TableTask> GetTasks(Requests.Report dates);
    }
}
using TimeControl.Models;

namespace TimeControl.Services
{
    public interface IReportCreator
    {
        Reports.Projects GetProjects(Requests.Report date);

        Reports.Workers GetWorkers(Requests.Report date);

        Reports.ProjectCountsWorkers GetProjectCountsWorkers(Requests.Report date);
    }
}
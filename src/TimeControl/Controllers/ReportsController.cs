using Microsoft.AspNetCore.Mvc;
using System;
using TimeControl.Models;
using TimeControl.Services;

namespace TimeControl.Controllers
{
    [Route("api/[controller]")]
    public class ReportsController : Controller
    {
        private readonly IReportCreator _reportCreator;

        public ReportsController(IReportCreator reportCreator)
        {
            _reportCreator = reportCreator;
        }

        // GET all time projects report
        // api/reports/getProjects
        [HttpGet]
        [Route("getProjects")]
        public IActionResult GetAllProjects()
        {
            try
            {
                var report = _reportCreator.GetProjects(null);
                return Ok(report);
            }
            catch (Exception)
            {
                return BadRequest("Porject report could not be created ");
            }
        }

        // GET all time workers report
        // api/reports/getWorkers
        [HttpGet]
        [Route("getWorkers")]
        public IActionResult GetAllWorkers()
        {
            try
            {
                var report = _reportCreator.GetWorkers(null);
                return Ok(report);
            }
            catch (Exception)
            {
                return BadRequest("Workers report could not be created ");
            }
        }

        // GET all time Project counts workers report
        // api/reports/getProjectCountsWorkers
        [HttpGet]
        [Route("getProjectCountsWorkers")]
        public IActionResult GetAllProjectCountsWorkers()
        {
            try
            {
                var report = _reportCreator.GetProjectCountsWorkers(null);
                return Ok(report);
            }
            catch (Exception)
            {
                return BadRequest("Project counts workers report could not be created ");
            }
        }

        // Get projects report in period
        // api/reports/getProjects
        [HttpPost]
        [Route("getProjects")]
        public IActionResult GetProjects([FromBody]Requests.Report dates)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid request parameters");

            try
            {
                var report = _reportCreator.GetProjects(dates);
                return Ok(report);
            }
            catch (Exception)
            {
                return BadRequest("Porject report could not be created ");
            }
        }

        // GET workers report in period
        // api/reports/getWorkers
        [HttpPost]
        [Route("getWorkers")]
        public IActionResult GetWorkers([FromBody]Requests.Report dates)
        {
            try
            {
                var report = _reportCreator.GetWorkers(dates);
                return Ok(report);
            }
            catch (Exception)
            {
                return BadRequest("Workers report could not be created ");
            }
        }

        // GET Project counts workers report in period
        // api/reports/getProjectCountsWorkers
        [HttpPost]
        [Route("getProjectCountsWorkers")]
        public IActionResult GetProjectCountsWorkers([FromBody]Requests.Report dates)
        {
            try
            {
                var report = _reportCreator.GetProjectCountsWorkers(dates);
                return Ok(report);
            }
            catch (Exception)
            {
                return BadRequest("Project counts workers report could not be created ");
            }
        }
    }
}
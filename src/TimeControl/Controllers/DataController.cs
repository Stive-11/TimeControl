using Microsoft.AspNetCore.Mvc;
using System;
using TimeControl.Models;
using TimeControl.Services;

namespace TimeControl.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {
        private readonly IRepository _repository;

        public DataController(IRepository repository)
        {
            _repository = repository;
        }

        // GET: api/data/getProjects
        // Get projects list
        [HttpGet]
        [Route("getProjects")]
        public IActionResult GetProjects()
        {
            try
            {
                var projects = _repository.GetProjects();
                return Ok(projects);
            }
            catch (Exception)
            {
                return BadRequest("Projects list could not be sent");
            }
        }

        // GET: api/data/getWorkers
        // Get Workers list
        [HttpGet]
        [Route("getWorkers")]
        public IActionResult GetWorkers()
        {
            try
            {
                var workers = _repository.GetWorkers();
                return Ok(workers);
            }
            catch (Exception)
            {
                return BadRequest("Workers list could not be sent");
            }
        }

        // GET: api/data/getTasks
        // Get Tasks list
        [HttpGet]
        [Route("getTasks")]
        public IActionResult GetAllTasks()
        {
            try
            {
                var tasks = _repository.GetTasks();
                return Ok(tasks);
            }
            catch (Exception)
            {
                return BadRequest("Tasks list could not be sent");
            }
        }

        // POST: api/data/getTasks
        // Get Tasks list in period
        [HttpPost]
        [Route("getTasks")]
        public IActionResult GetTasks([FromBody]Requests.Report dates)
        {
            try
            {
                var tasks = _repository.GetTasks(dates);
                return Ok(tasks);
            }
            catch (Exception)
            {
                return BadRequest("Tasks list could not be sent");
            }
        }
    }
}
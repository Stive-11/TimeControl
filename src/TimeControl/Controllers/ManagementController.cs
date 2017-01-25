using Microsoft.AspNetCore.Mvc;
using System;
using TimeControl.Models;
using TimeControl.Services;

namespace TimeControl.Controllers
{
    [Route("api/[controller]")]
    public class ManagementController : Controller
    {
        private readonly IRepository _repository;

        public ManagementController(IRepository repository)
        {
            _repository = repository;
        }

        // DELETE: api/Management/deleteTask/{id}
        // Delete task
        [HttpDelete]
        [Route("deleteTask/{id:int}")]
        public IActionResult Remove(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest();
            try
            {
                _repository.DeleteTask(id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // POST: api/management/addTask
        // Add task
        [HttpPost]
        [Route("addTask")]
        public IActionResult AddTask([FromBody]Db.Task task)
        {
            try
            {
                _repository.AddTask(task);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // POST: api/management/addProject
        // Add Project
        [HttpPost]
        [Route("addProject")]
        public IActionResult AddProject([FromBody]Db.Project project)
        {
            try
            {
                _repository.AddProject(project);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // POST: api/management/addWorker
        // Add Worker
        [HttpPost]
        [Route("addWorker")]
        public IActionResult AddWorker([FromBody]Db.Worker worker)
        {
            try
            {
                _repository.AddWorker(worker);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // PUT: api/managment/updateTask
        // Update task
        [HttpPut]
        [Route("updateTask")]
        public IActionResult Update(int id, [FromBody] Db.Task task)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            try
            {
                _repository.UpdateTask(task);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
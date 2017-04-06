using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebUi.ViewModels;
using WebUi.Models;
using Utility;

namespace WebUi.Controllers.Api
{
    public class ApiController : Controller
    {
        // Temporary way of storing tasks
        private static IList<TaskModel> tasks = new List<TaskModel>();

        [HttpGet]
        public IActionResult GetTasks()
        {
            IList<TaskViewModel> viewModels = new List<TaskViewModel>();

            tasks
                .ForEach(task => viewModels.Add(new TaskViewModel()
                {
                    TaskId = task.TaskId,
                    Description = task.Description,
                    IsComplete = task.IsComplete
                }));

            return Ok(tasks);
        }

        [HttpPost]
        public IActionResult AddTask([FromBody]TaskViewModel viewModel)
        {
            if (ModelState.IsValid)
            {
                TaskModel taskModel = new TaskModel()
                {
                    Description = viewModel.Description,
                    IsComplete = viewModel.IsComplete
                };

                tasks.Add(taskModel);

                viewModel.TaskId = taskModel.TaskId;

                return Created($"/Api/AddTask/", viewModel);
            }

            return BadRequest("Adding task failed.");
        }

        [HttpPost]
        public IActionResult SaveTask([FromBody]TaskViewModel viewModel)
        {
            if (ModelState.IsValid)
            {
                TaskModel taskModel =
                    tasks
                    .Where(task => task.TaskId == viewModel.TaskId)
                    .FirstOrDefault();

                if (taskModel != null)
                {
                    taskModel.Description = viewModel.Description;
                    taskModel.IsComplete = viewModel.IsComplete;

                    return Ok("Task successfully updated");
                }
            }

            return BadRequest("Task failed to save.");
        }

        [HttpDelete("Api/DeleteTask/{taskId}")]
        public IActionResult DeleteTask(int taskId)
        {
            TaskModel taskModel =
                tasks
                .Where(task => task.TaskId == taskId)
                .FirstOrDefault();

            if (tasks.Remove(taskModel))
                return Ok("Task successfully deleted.");

            return BadRequest("Task failed to delete.");
        }
    }
}

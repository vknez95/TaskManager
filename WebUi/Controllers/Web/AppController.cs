using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebUi.Controllers.Web
{
    public class AppController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Message"] = "Task manager";

            return View(nameof(Index));
        }
    }
}

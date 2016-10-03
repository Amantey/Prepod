using Prepod.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Prepod.Controllers
{
    public class StudentsController : Controller
    {
        // GET: Students
        mydbEntities model = new mydbEntities();
        public ActionResult Index()
        {
            List<students_group> students = model.students_group.ToList();
            return View(students);
        }
    }
}
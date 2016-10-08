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
            List<String> students_name = new List<String>();

            foreach(var stud in students){
                students_name = stud.name_s;
            }
            return PartialView(students);
        }

        public ActionResult Index()
        {
            List<String> Str = new List<string>();
            List<students_group> students = model.students_group.ToList();
            foreach (var s in students)
            {
                Str.Add(s.name_s);
            }
            return Json(Str,JsonRequestBehavior.AllowGet);
        }
    }
}
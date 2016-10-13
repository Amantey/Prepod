using Prepod.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Prepod.Controllers
{
    public class GetAllGroupsController : Controller
    {
        // GET: GetAllGroups

        mydbEntities model = new mydbEntities();
        public ActionResult Index()
        {
            List<String> ListGroups = new List<string>();
            List<groups> groups = model.groups.ToList();
            foreach (var curGroup in groups)
            {
                ListGroups.Add(curGroup.name_g);
            }
            return Json(ListGroups, JsonRequestBehavior.AllowGet);
        }
    }
}
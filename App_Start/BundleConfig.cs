using System.Web;
using System.Web.Optimization;

namespace Prepod 
{
    public class BundleConfig
    {
        //Дополнительные сведения об объединении см. по адресу: http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                          "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Используйте версию Modernizr для разработчиков, чтобы учиться работать. Когда вы будете готовы перейти к работе,
            // используйте средство сборки на сайте http://modernizr.com, чтобы выбрать только нужные тесты.
            /*bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));*/

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

           bundles.Add(new StyleBundle("~/bundles/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Content/jquery-ui.css",
                      "~/Content/TimeTable.css",
                      "~/Content/TableRedaktor.css"));

           bundles.Add(new ScriptBundle("~/bundles/ajax").Include(
                       "~/Scripts/jquery.unobtrusive-ajax.js"));

           bundles.Add(new ScriptBundle("~/bundles/TimeTable").Include(
                        "~/Scripts/TimeTable/CreatorTimeTable.js",
                        "~/Scripts/TimeTable/DateAndTime.js",
                        "~/Scripts/TimeTable/ModalListStudentPrakRequest.js",
                        "~/Scripts/TimeTable/DynamicTableLek.js",
                        "~/Scripts/TimeTable/DynamicTablePrak.js",
                        "~/Scripts/TimeTable/TimeTableListener.js"
                        ));
           bundles.Add(new ScriptBundle("~/bundles/TimeTableRedaktor").Include(
                        
                        "~/Scripts/TimeTableRedaktor/TableRedaktorListener.js",
                        "~/Scripts/TimeTableRedaktor/ModalListGroupsRequest.js",
                        "~/Scripts/TimeTableRedaktor/CreatorTimeTableRedaktor.js"
               ));
           bundles.Add(new ScriptBundle("~/bundles/globalScripts").Include(
                        "~/Scripts/Plugins.js"
               ));
        }
    }
}

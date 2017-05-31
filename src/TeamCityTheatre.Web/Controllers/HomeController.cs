using Microsoft.AspNetCore.Mvc;

namespace TeamCityTheatre.Web.Controllers {
  public class HomeController : Controller {
    public IActionResult Index() {
      return RedirectToAction("Dashboard");
    }

    public IActionResult Dashboard() {
      return View("dashboard");
    }

    public IActionResult Settings() {
      return View("settings");
    }
  }
}
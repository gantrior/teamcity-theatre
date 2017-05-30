using Microsoft.AspNetCore.Mvc;

namespace TeamCityTheatre.Web.Controllers {
  public class DashboardController : Controller {
    public IActionResult Index() {
      return View();
    }
  }
}
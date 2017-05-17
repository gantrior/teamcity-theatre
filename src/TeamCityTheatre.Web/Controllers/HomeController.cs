using Microsoft.AspNetCore.Mvc;

namespace TeamCityTheatre.Web.Controllers {
  public class HomeController : Controller {
    public IActionResult Dashboard() {
      return View();
    }

    public IActionResult Error() {
      return View();
    }
  }
}
using Microsoft.AspNetCore.Mvc;

namespace TeamCityTheatre.Web.Controllers {
  public class SettingsController : Controller {
    public IActionResult Index() {
      return View();
    }
  }
}
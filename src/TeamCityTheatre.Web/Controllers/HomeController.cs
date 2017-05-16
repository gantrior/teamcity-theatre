using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using TeamCityTheatre.Core.Options;
using TeamCityTheatre.Web.Views.Home;

namespace TeamCityTheatre.Web.Controllers {
  public class HomeController : Controller {
    readonly ConnectionOptions _connectionOptions;

    public HomeController(IOptionsSnapshot<ConnectionOptions> connectionOptionsSnapshot) {
      _connectionOptions = connectionOptionsSnapshot.Value;
    }

    public IActionResult Dashboard() {
      return View(new DashboardViewModel {
        PollingTimeOutInMilliSeconds = _connectionOptions.PollingTimeOutInMilliseconds
      });
    }

    public IActionResult Error() {
      return View();
    }
  }
}
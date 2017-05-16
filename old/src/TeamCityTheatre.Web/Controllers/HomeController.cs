using System.Configuration;
using System.Web.Mvc;
using TeamCityTheatre.Core;
using TeamCityTheatre.Web.Views.Home;

namespace TeamCityTheatre.Web.Controllers {
  public class HomeController : Controller {
    private readonly ITeamCityTheatreSettings _teamCityTheatreSettings;

    public HomeController(ITeamCityTheatreSettings teamCityTheatreSettings) {
      _teamCityTheatreSettings = teamCityTheatreSettings;
    }

    public ActionResult Index() {
      return View(new IndexViewModel {
        PollingTimeOutInMilliSeconds = _teamCityTheatreSettings.PollingTimeOutInMilliSeconds
      });
    }
  }
}
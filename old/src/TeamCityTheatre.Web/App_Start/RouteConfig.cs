using System.Web.Mvc;
using System.Web.Routing;

namespace TeamCityTheatre.Web {
  public class RouteConfig {
    public static void RegisterRoutes(RouteCollection routes) {
      routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
      routes.MapRoute("Home", "", new {controller = "Home", action = "Index"});
      routes.MapRoute("Dashboard", "dashboard/{*.}", new {controller = "Home", action = "Index"});
      routes.MapRoute("Configuration", "config/{*.}", new { controller = "Home", action = "Index" });
    }
  }
}
using System.Web.Http;
using Newtonsoft.Json.Serialization;

namespace TeamCityTheatre.Web {
  public static class WebApiConfig {
    public static void Register(HttpConfiguration config) {
      // Web API configuration and services
      config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
      config.Formatters.JsonFormatter.SerializerSettings.Converters.Add(new Newtonsoft.Json.Converters.StringEnumConverter());
      // Web API routes
      config.MapHttpAttributeRoutes();

      config.Routes.MapHttpRoute("DefaultApi", "api/{controller}/{id}", new { id = RouteParameter.Optional });
    }
  }
}
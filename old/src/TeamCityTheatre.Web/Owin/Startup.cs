using System.Web.Http;
using System.Web.Mvc;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using Microsoft.Owin;
using Owin;
using TeamCityTheatre.Web.Owin;

[assembly: OwinStartup(typeof(Startup))]
namespace TeamCityTheatre.Web.Owin
{
  public class Startup
  {
    public void Configuration(IAppBuilder app)
    {
      var container = app.UseAutofacDependencyInjection();

      /* backwards compatibility with older MVC and WebApi modules */

      // MVC dependency resolver
      DependencyResolver.SetResolver(new AutofacDependencyResolver(container));

      // Web API dependency resolver
      GlobalConfiguration.Configuration.DependencyResolver = new AutofacWebApiDependencyResolver(container);
    }
  }
}
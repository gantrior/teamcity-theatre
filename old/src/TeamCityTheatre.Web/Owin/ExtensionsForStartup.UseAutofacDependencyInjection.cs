using Autofac;
using Owin;
using TeamCityTheatre.Application;

namespace TeamCityTheatre.Web.Owin
{
  public static partial class ExtensionsForStartup
  {
    public static IContainer UseAutofacDependencyInjection(this IAppBuilder app) {
      var builder = new ContainerBuilder();
      builder.RegisterModule<ApplicationModule>();
      builder.RegisterModule<WebModule>();
      var container = builder.Build();
      app.UseAutofacMiddleware(container);
      return container;
    }
  }
}
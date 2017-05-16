using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

namespace TeamCityTheatre.Web {
  public class WebModule : Module {
    protected override void Load(ContainerBuilder builder) {
      // Register MVC controllers.
      builder.RegisterControllers(ThisAssembly);
      builder.RegisterApiControllers(ThisAssembly);
      // Register web abstractions like HttpContextBase, RequestContext, ...
      builder.RegisterModule<AutofacWebTypesModule>();

      var serializerSettings = new JsonSerializerSettings {
        Converters = {new StringEnumConverter {CamelCaseText = true}}
      };
      builder.RegisterInstance(JsonSerializer.Create(serializerSettings)).AsSelf();

      // OPTIONAL: Register model binders that require DI.
      // builder.RegisterModelBinders(Assembly.GetExecutingAssembly());
      // builder.RegisterModelBinderProvider();

      // OPTIONAL: Enable property injection into action filters.
      // builder.RegisterFilterProvider();
    }
  }
}
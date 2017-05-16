using System.Linq;
using Autofac;
using TeamCityTheatre.Application.Client;
using TeamCityTheatre.Core;
using TeamCityTheatre.Core.Client;

namespace TeamCityTheatre.Application {
  public class ApplicationModule : Module {
    protected override void Load(ContainerBuilder builder) {
      string[] knownSuffixes = {"Service", "Mapper", "Repository", "Client", "Factory", "Validator", "Preparer"};

      builder.RegisterAssemblyTypes(ThisAssembly)
        .Where(t => knownSuffixes.Any(suffix => t.Name.EndsWith(suffix)))
        .AsImplementedInterfaces()
        .InstancePerLifetimeScope();

      builder.Register(ctx => TeamCityConnectionSettings.Instance).As<IConnectionSettings>().InstancePerLifetimeScope();
      builder.Register(ctx => new TeamCityTheatreSettings()).As<ITeamCityTheatreSettings>().InstancePerLifetimeScope();
    }
  }
}
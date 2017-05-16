using System.Linq;
using Autofac;
using TeamCityTheatre.Core.Client;

namespace TeamCityTheatre.Core {
  public class CoreModule : Module {
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
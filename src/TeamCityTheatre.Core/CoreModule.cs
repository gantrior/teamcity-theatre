using System.Linq;
using Autofac;

namespace TeamCityTheatre.Core {
  public class CoreModule : Module {
    protected override void Load(ContainerBuilder builder) {
      string[] knownSuffixes = {"Service", "Mapper", "Repository", "Client", "Factory", "Validator", "Preparer"};

      builder.RegisterAssemblyTypes(ThisAssembly)
        .Where(t => knownSuffixes.Any(suffix => t.Name.EndsWith(suffix)))
        .AsImplementedInterfaces()
        .InstancePerLifetimeScope();
    }
  }
}
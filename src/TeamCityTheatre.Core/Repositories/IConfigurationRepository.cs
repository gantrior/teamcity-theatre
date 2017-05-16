using TeamCityTheatre.Core.ApplicationModels;

namespace TeamCityTheatre.Core.Repositories {
  public interface IConfigurationRepository {
    Configuration GetConfiguration();
    void SaveConfiguration(Configuration configuration);
  }
}
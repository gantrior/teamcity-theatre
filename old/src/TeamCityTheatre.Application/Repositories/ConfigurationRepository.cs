using System.IO;
using Newtonsoft.Json;
using TeamCityTheatre.Core;
using TeamCityTheatre.Core.ApplicationModels;
using TeamCityTheatre.Core.Repositories;

namespace TeamCityTheatre.Application.Repositories {
  public class ConfigurationRepository : IConfigurationRepository {
    private readonly DirectoryInfo _workspace;
    private readonly FileInfo _configurationFile;

    public ConfigurationRepository(ITeamCityTheatreSettings settings) {
      _workspace = settings.Workspace;
      _configurationFile = new FileInfo(Path.Combine(_workspace.FullName, settings.ConfigurationFileName));
    }

    private void EnsureConfigurationFileExists() {
      if(!_workspace.Exists)
        _workspace.Create();
      if (!_configurationFile.Exists)
        _configurationFile.Create().Dispose();
    }

    public Configuration GetConfiguration() {
      EnsureConfigurationFileExists();
      return JsonConvert.DeserializeObject<Configuration>(File.ReadAllText(_configurationFile.FullName)) ?? new Configuration();
    }

    public void SaveConfiguration(Configuration configuration) {
      EnsureConfigurationFileExists();
      File.WriteAllText(_configurationFile.FullName, JsonConvert.SerializeObject(configuration, Formatting.Indented));
    }
  }
}
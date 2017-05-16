using System.IO;

namespace TeamCityTheatre.Core {
  public interface ITeamCityTheatreSettings {
    DirectoryInfo Workspace { get; }
    string ConfigurationFileName { get; }
    int PollingTimeOutInMilliSeconds { get; }
  }
}
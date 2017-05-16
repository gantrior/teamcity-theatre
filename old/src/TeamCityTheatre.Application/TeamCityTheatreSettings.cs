using System;
using System.Configuration;
using System.IO;
using TeamCityTheatre.Core;

namespace TeamCityTheatre.Application {
  public class TeamCityTheatreSettings : ITeamCityTheatreSettings {
    public DirectoryInfo Workspace => new DirectoryInfo(ConfigurationManager.AppSettings["TeamCityTheatre.Workspace"]);

    public string ConfigurationFileName => ConfigurationManager.AppSettings["TeamCityTheatre.Workspace.ConfigurationFile"];

    public int PollingTimeOutInMilliSeconds => Convert.ToInt32(ConfigurationManager.AppSettings["TeamCityTheatre.PollingTimeOutInMilliSeconds"]);
  }
}
using System;
using TeamCityTheatre.Core.DataServices.Locators;

namespace TeamCityTheatre.Application.DataServices.Locators {
  public class BuildConfigurationByIdLocator : IBuildConfigurationLocator {
    private readonly string _buildConfigurationId;

    public BuildConfigurationByIdLocator(string buildConfigurationId) {
      if (buildConfigurationId == null) throw new ArgumentNullException(nameof(buildConfigurationId));
      _buildConfigurationId = buildConfigurationId;
    }

    public string Serialize() {
      return string.Concat("id", ":", _buildConfigurationId);
    }
  }
}
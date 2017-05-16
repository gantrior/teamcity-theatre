using System;

namespace TeamCityTheatre.Core.DataServices.Locators {
  public class BuildConfigurationByIdLocator : IBuildConfigurationLocator {
    readonly string _buildConfigurationId;

    public BuildConfigurationByIdLocator(string buildConfigurationId) {
      _buildConfigurationId = buildConfigurationId ?? throw new ArgumentNullException(nameof(buildConfigurationId));
    }

    public string Serialize() {
      return string.Concat("id", ":", _buildConfigurationId);
    }
  }
}
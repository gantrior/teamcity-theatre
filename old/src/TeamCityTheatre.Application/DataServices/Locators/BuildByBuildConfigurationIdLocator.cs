using System;
using TeamCityTheatre.Core.DataServices.Locators;

namespace TeamCityTheatre.Application.DataServices.Locators {
  internal class BuildByBuildConfigurationLocator : IBuildLocator {
    private readonly IBuildConfigurationLocator _buildConfigurationLocator;

    public BuildByBuildConfigurationLocator(IBuildConfigurationLocator buildConfigurationLocator) {
      if (buildConfigurationLocator == null) {
        throw new ArgumentNullException(nameof(buildConfigurationLocator));
      }
      _buildConfigurationLocator = buildConfigurationLocator;
    }

    public string Serialize() {
      return string.Format("buildType:({0})", _buildConfigurationLocator.Serialize());
    }
  }
}
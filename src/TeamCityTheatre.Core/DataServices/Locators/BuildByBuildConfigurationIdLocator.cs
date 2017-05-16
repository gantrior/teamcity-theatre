using System;

namespace TeamCityTheatre.Core.DataServices.Locators {
  internal class BuildByBuildConfigurationLocator : IBuildLocator {
    readonly IBuildConfigurationLocator _buildConfigurationLocator;

    public BuildByBuildConfigurationLocator(IBuildConfigurationLocator buildConfigurationLocator) {
      _buildConfigurationLocator = buildConfigurationLocator ?? throw new ArgumentNullException(nameof(buildConfigurationLocator));
    }

    public string Serialize() {
      return string.Format("buildType:({0})", _buildConfigurationLocator.Serialize());
    }
  }
}
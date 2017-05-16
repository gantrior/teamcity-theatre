using System;

namespace TeamCityTheatre.Core.DataServices.Locators {
  public class BuildConfigurationByNameLocator : IBuildConfigurationLocator {
    readonly string _name;

    public BuildConfigurationByNameLocator(string name) {
      _name = name ?? throw new ArgumentNullException(nameof(name));
    }

    public string Serialize() {
      return string.Concat("name", ":", _name);
    }
  }
}
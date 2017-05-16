using System;
using TeamCityTheatre.Core.DataServices.Locators;

namespace TeamCityTheatre.Application.DataServices.Locators {
  public class BuildConfigurationByNameLocator: IBuildConfigurationLocator {
    private readonly string _name;

    public BuildConfigurationByNameLocator(string name) {
      if (name == null) throw new ArgumentNullException(nameof(name));
      _name = name;
    }

    public string Serialize() {
      return string.Concat("name", ":", _name);
    }
  }
}
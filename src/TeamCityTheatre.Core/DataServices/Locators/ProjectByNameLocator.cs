using System;

namespace TeamCityTheatre.Core.DataServices.Locators {
  public class ProjectByNameLocator : IProjectLocator {
    readonly string _projectName;

    public ProjectByNameLocator(string projectName) {
      _projectName = projectName ?? throw new ArgumentNullException(nameof(projectName));
    }

    public string Serialize() {
      return string.Concat("name", ":", _projectName);
    }
  }
}
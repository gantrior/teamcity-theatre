using System;
using TeamCityTheatre.Core.DataServices.Locators;

namespace TeamCityTheatre.Application.DataServices.Locators {
  public class ProjectByNameLocator : IProjectLocator {
    private readonly string _projectName;

    public ProjectByNameLocator(string projectName) {
      if (projectName == null) throw new ArgumentNullException(nameof(projectName));
      _projectName = projectName;
    }

    public string Serialize() {
      return string.Concat("name", ":", _projectName);
    }
  }
}
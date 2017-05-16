using System;

namespace TeamCityTheatre.Core.DataServices.Locators {
  public class ProjectByIdLocator : IProjectLocator {
    readonly string _internalProjectId;

    public ProjectByIdLocator(string internalProjectId) {
      _internalProjectId = internalProjectId ?? throw new ArgumentNullException(nameof(internalProjectId));
    }

    public string Serialize() {
      return string.Concat("id", ":", _internalProjectId);
    }
  }
}
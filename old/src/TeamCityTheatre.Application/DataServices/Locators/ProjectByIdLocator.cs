using System;
using TeamCityTheatre.Core.DataServices.Locators;

namespace TeamCityTheatre.Application.DataServices.Locators {
  public class ProjectByIdLocator : IProjectLocator {
    private readonly string _internalProjectId;

    public ProjectByIdLocator(string internalProjectId) {
      if (internalProjectId == null) throw new ArgumentNullException(nameof(internalProjectId));
      _internalProjectId = internalProjectId;
    }

    public string Serialize() {
      return String.Concat("id", ":", _internalProjectId);
    }
  }
}
using System.Collections.Generic;
using TeamCityTheatre.Core.Client.Responses;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Core.Client.Mappers {
  public interface IProjectMapper {
    Project Map(ProjectResponse project);
    IReadOnlyCollection<Project> Map(ProjectsResponse projects);
  }
}
using System.Collections.Generic;
using TeamCityTheatre.Core.Client.Responses;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Core.Client.Mappers {
  public interface IArtifactDependencyMapper {
    ArtifactDependency Map(ArtifactDependencyResponse artifactDependency);
    IReadOnlyCollection<ArtifactDependency> Map(ArtifactDependenciesResponse artifactDependencies);
  }
}
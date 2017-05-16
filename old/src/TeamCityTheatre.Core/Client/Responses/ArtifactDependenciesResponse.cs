using System.Collections.Generic;

namespace TeamCityTheatre.Core.Client.Responses {
  public class ArtifactDependenciesResponse {
    public int Count { get; set; }
    public List<ArtifactDependencyResponse> ArtifactDependency { get; set; }
  }
}
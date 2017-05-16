using System.Collections.Generic;

namespace TeamCityTheatre.Core.Client.Responses {
  public class SnapshotDependenciesResponse {
    public int Count { get; set; }
    public List<SnapshotDependencyResponse> SnapshotDependency { get; set; }
  }
}
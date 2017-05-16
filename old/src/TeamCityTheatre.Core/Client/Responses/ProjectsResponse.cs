using System.Collections.Generic;

namespace TeamCityTheatre.Core.Client.Responses {
  public class ProjectsResponse {
    public int Count { get; set; }
    public List<ProjectResponse> Project { get; set; }
  }
}
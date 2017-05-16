using System.Collections.Generic;

namespace TeamCityTheatre.Core.Client.Responses {
  public class BuildsResponse {
    public int Count { get; set; }
    public List<BuildResponse> Build { get; set; }
  }
}
using System.Collections.Generic;

namespace TeamCityTheatre.Core.Client.Responses {
  public class BuildTypesResponse {
    public int Count { get; set; }
    public List<BuildTypeResponse> BuildType { get; set; }
  }
}
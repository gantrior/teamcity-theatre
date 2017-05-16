using System.Collections.Generic;

namespace TeamCityTheatre.Core.Client.Responses {
  public class BuildTriggersResponse {
    public int Count { get; set; }
    public List<BuildTriggerResponse> BuildTrigger { get; set; }
  }
}
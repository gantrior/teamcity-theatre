using System.Collections.Generic;

namespace TeamCityTheatre.Core.Client.Responses {
  public class BuildStepsResponse {
    public int Count { get; set; }
    public List<BuildStepResponse> BuildStep { get; set; }
  }
}
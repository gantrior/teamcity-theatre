using System.Collections.Generic;

namespace TeamCityTheatre.Core.Client.Responses {
  public class AgentRequirementsResponse {
    public int Count { get; set; }
    public List<AgentRequirementResponse> AgentRequirement { get; set; }
  }
}
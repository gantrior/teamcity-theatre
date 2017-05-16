using System.Collections.Generic;
using TeamCityTheatre.Core.Client.Responses;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Core.Client.Mappers {
  public interface IAgentRequirementMapper {
    AgentRequirement Map(AgentRequirementResponse agentRequirement);
    IReadOnlyCollection<AgentRequirement> Map(AgentRequirementsResponse agentRequirements);
  }
}
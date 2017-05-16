using TeamCityTheatre.Core.Client.Mappers;
using TeamCityTheatre.Core.Client.Responses;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Application.Client.Mappers {
  public class AgentMapper : IAgentMapper {
    public Agent Map(AgentResponse agent) {
      if (agent == null) return null;
      return new Agent {
        Href = agent.Href,
        Id = agent.Id,
        Name = agent.Name,
        TypeId = agent.TypeId
      };
    }
  }
}
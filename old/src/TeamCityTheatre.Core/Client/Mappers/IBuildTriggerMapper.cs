using System.Collections.Generic;
using TeamCityTheatre.Core.Client.Responses;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Core.Client.Mappers {
  public interface IBuildTriggerMapper {
    BuildTrigger Map(BuildTriggerResponse buildTrigger);
    IReadOnlyCollection<BuildTrigger> Map(BuildTriggersResponse buildTrigger);
  }
}
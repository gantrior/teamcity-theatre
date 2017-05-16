using System.Collections.Generic;
using TeamCityTheatre.Core.Client.Responses;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Core.Client.Mappers {
  public interface IBuildChangeMapper {
    BuildChange Map(BuildChangeResponse buildChange);
    IReadOnlyCollection<BuildChange> Map(BuildChangesResponse buildChanges);
  }
}
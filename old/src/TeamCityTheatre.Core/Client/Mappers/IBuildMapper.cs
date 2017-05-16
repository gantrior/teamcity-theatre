using System.Collections.Generic;
using TeamCityTheatre.Core.Client.Responses;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Core.Client.Mappers {
  public interface IBuildMapper {
    Build Map(BuildResponse build);
    IReadOnlyCollection<Build> Map(BuildsResponse builds);
  }
}
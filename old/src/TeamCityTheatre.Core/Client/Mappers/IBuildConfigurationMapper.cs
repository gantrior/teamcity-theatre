using System.Collections.Generic;
using TeamCityTheatre.Core.Client.Responses;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Core.Client.Mappers {
  public interface IBuildConfigurationMapper {
    BuildConfiguration Map(BuildTypeResponse buildType);
    IReadOnlyCollection<BuildConfiguration> Map(BuildTypesResponse buildTypes);
  }
}
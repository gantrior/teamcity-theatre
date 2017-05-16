using System.Collections.Generic;
using TeamCityTheatre.Core.Client.Responses;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Core.Client.Mappers {
  public interface IBuildStepMapper {
    BuildStep Map(BuildStepResponse buildStep);
    IReadOnlyCollection<BuildStep> Map(BuildStepsResponse buildStep);
  }
}
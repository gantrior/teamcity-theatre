using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Core.Client.Mappers {
  public interface IBuildStatusMapper {
    BuildStatus Map(string buildStatus);
  }
}
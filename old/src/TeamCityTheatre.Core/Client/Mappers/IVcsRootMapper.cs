using TeamCityTheatre.Core.Client.Responses;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Core.Client.Mappers {
  public interface IVcsRootMapper {
    VcsRoot Map(VcsRootResponse vcsRootResponse);
  }
}
using System.Collections.Generic;
using System.Threading.Tasks;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Core.DataServices {
  public interface IBuildDataService {
    Task<IEnumerable<IDetailedBuild>> GetBuildsOfBuildConfigurationAsync(string buildConfigurationId, int count = 100);
    Task<IDetailedBuild> GetBuildDetailsAsync(int buildId);
  }
}
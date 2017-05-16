using System.Collections.Generic;
using System.Threading.Tasks;
using TeamCityTheatre.Core.DataServices.Locators;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Core.DataServices {
  public interface IBuildConfigurationDataService {
    Task<IEnumerable<IBasicBuildConfiguration>> GetAllBuildConfigurationsAsync();
    Task<IEnumerable<IBasicBuildConfiguration>> GetBuildConfigurationsAsync(IBuildConfigurationLocator buildConfigurationLocator);
    Task<IDetailedBuildConfiguration> GetBuildConfigurationDetailsAsync(IBuildConfigurationLocator buildConfigurationLocator);
  }
}
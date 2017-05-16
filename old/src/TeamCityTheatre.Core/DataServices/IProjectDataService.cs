using System.Collections.Generic;
using System.Threading.Tasks;
using TeamCityTheatre.Core.DataServices.Locators;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Core.DataServices {
  public interface IProjectDataService {
    Task<IEnumerable<IBasicProject>> GetAllProjectsAsync();
    Task<IDetailedProject> GetProjectDetailsAsync(IProjectLocator projectLocator);
  }
}
using System.Collections.Generic;
using TeamCityTheatre.Core.DataServices.Locators;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Core.DataServices {
  public interface IVcsRootDataService {
    IEnumerable<IBasicVcsRoot> GetAllVcsRoots();
    IDetailedVcsRoot GetVcsRootDetails(IVcsRootLocator locator);
  }
}
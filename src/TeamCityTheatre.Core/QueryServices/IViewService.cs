using System.Threading.Tasks;
using TeamCityTheatre.Core.QueryServices.Models;

namespace TeamCityTheatre.Core.QueryServices {
  public interface IViewService {
    Task<ViewData> GetLatestViewDataAsync(string viewId);
  }
}
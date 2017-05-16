using System;
using System.Linq;
using System.Threading.Tasks;
using TeamCityTheatre.Core.DataServices;
using TeamCityTheatre.Core.QueryServices.Models;

namespace TeamCityTheatre.Core.QueryServices {
  public class ViewService : IViewService {
    readonly IViewDataService _viewDataService;
    readonly ITileService _tileService;

    public ViewService(IViewDataService viewDataService, ITileService tileService) {
      _viewDataService = viewDataService ?? throw new ArgumentNullException(nameof(viewDataService));
      _tileService = tileService;
    }

    public async Task<ViewData> GetLatestViewDataAsync(string viewId) {
      var view = _viewDataService.GetViewById(Guid.Parse(viewId));
      return new ViewData {
        Tiles = await Task.WhenAll(view.Tiles.Select(t => _tileService.GetLatestTileDataAsync(view, t)))
      };
    }
  }
}
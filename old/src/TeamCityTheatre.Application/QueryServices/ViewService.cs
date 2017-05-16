using System;
using System.Linq;
using System.Threading.Tasks;
using TeamCityTheatre.Core.DataServices;
using TeamCityTheatre.Core.QueryServices;
using TeamCityTheatre.Core.QueryServices.Models;

namespace TeamCityTheatre.Application.QueryServices
{
  public class ViewService: IViewService
  {
    private readonly IViewDataService _viewDataService;
    private readonly ITileService _tileService;

    public ViewService(IViewDataService viewDataService, ITileService tileService) {
      if (viewDataService == null) {
        throw new ArgumentNullException(nameof(viewDataService));
      }
      _viewDataService = viewDataService;
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

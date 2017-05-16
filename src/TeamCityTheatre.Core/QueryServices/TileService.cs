using System;
using System.Linq;
using System.Threading.Tasks;
using TeamCityTheatre.Core.ApplicationModels;
using TeamCityTheatre.Core.DataServices;
using TeamCityTheatre.Core.QueryServices.Models;

namespace TeamCityTheatre.Core.QueryServices {
  public class TileService : ITileService {
    readonly IBuildDataService _buildDataService;

    public TileService(IBuildDataService buildDataService) {
      _buildDataService = buildDataService ?? throw new ArgumentNullException(nameof(buildDataService));
    }

    public async Task<TileData> GetLatestTileDataAsync(View view, Tile tile) {
      var builds = await _buildDataService.GetBuildsOfBuildConfigurationAsync(tile.BuildConfigurationId, 20);
      return new TileData {
        Label = tile.Label,
        Builds = builds.GroupBy(b => b.BranchName)
          .Select(buildsOfBranch => buildsOfBranch.OrderByDescending(b => b.StartDate).FirstOrDefault())
          .Take(view.DefaultNumberOfBranchesPerTile)
          .ToList()
      };
    }
  }
}
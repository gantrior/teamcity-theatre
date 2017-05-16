using System;
using System.Linq;
using TeamCityTheatre.Core.ApplicationModels;
using TeamCityTheatre.Core.DataServices;
using TeamCityTheatre.Core.Repositories;

namespace TeamCityTheatre.Application.DataServices
{
  public class TileDataService: ITileDataService
  {
    private readonly IConfigurationRepository _configurationRepository;

    public TileDataService(IConfigurationRepository configurationRepository) {
      if (configurationRepository == null) {
        throw new ArgumentNullException(nameof(configurationRepository));
      }
      _configurationRepository = configurationRepository;
    }

    public Tile GetTileById(Guid id) {
      return _configurationRepository.GetConfiguration()
        .Views.SelectMany(v => v.Tiles)
        .SingleOrDefault(t => t.Id == id);
    }
  }
}

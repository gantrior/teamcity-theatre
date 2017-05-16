using System;
using TeamCityTheatre.Core.ApplicationModels;

namespace TeamCityTheatre.Core.DataServices
{
  public interface ITileDataService {
    Tile GetTileById(Guid id);
  }
}

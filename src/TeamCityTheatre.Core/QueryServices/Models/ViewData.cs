using System;
using System.Collections.Generic;

namespace TeamCityTheatre.Core.QueryServices.Models {
  public class ViewData {
    public Guid Id { get; set; }
    public IList<TileData> Tiles { get; set; }
  }
}
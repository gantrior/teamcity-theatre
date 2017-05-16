using System;
using System.Collections.Generic;

namespace TeamCityTheatre.Core.ApplicationModels {
  public class View {
    public View() {
      Tiles = new List<Tile>();
    }

    public Guid Id { get; set; }
    public string Name { get; set; }
    public int DefaultNumberOfBranchesPerTile { get; set; }
    public ICollection<Tile> Tiles { get; set; }
  }
}
using System;

namespace TeamCityTheatre.Core.ApplicationModels {
  public class Tile {
    public Guid Id { get; set; }
    public string Label { get; set; }
    public string BuildConfigurationId { get; set; }
    public string BuildConfigurationDisplayName { get; set; }
  }
}
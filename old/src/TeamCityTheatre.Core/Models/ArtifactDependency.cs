using System.Collections.Generic;

namespace TeamCityTheatre.Core.Models {
  public class ArtifactDependency {
    public string Id { get; set; }
    public string Type { get; set; }
    public IReadOnlyCollection<Property> Properties { get; set; }

    public override string ToString() {
      return string.Format("Id: {0}, Type: {1}", Id, Type);
    }
  }
}
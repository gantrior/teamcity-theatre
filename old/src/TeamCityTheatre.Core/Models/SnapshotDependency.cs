using System.Collections.Generic;

namespace TeamCityTheatre.Core.Models {
  public class SnapshotDependency {
    public string Id { get; set; }
    public IReadOnlyCollection<Property> Properties { get; set; }

    public override string ToString() {
      return string.Format("Id: {0}, Properties: {1}", Id, Properties);
    }
  }
}
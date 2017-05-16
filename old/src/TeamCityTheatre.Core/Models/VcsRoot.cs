using System;
using System.Collections.Generic;

namespace TeamCityTheatre.Core.Models {
  public class VcsRoot : IBasicVcsRoot, IDetailedVcsRoot {
    public string Id { get; set; }
    public string Name { get; set; }
    public string Href { get; set; }
    public string VcsName { get; set; }
    public DateTime LastChecked { get; set; }
    public IBasicProject Project { get; set; }
    public IReadOnlyCollection<Property> Properties { get; set; }

    public override string ToString() {
      return string.Format("Id: {0}, Name: {1}, VcsName: {2}, Project: {3}", Id, Name, VcsName, Project);
    }
  }
}
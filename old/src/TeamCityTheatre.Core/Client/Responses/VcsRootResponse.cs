using System;

namespace TeamCityTheatre.Core.Client.Responses {
  public class VcsRootResponse {
    public string Id { get; set; }
    public string Name { get; set; }
    public string Href { get; set; }
    public string VcsName { get; set; }
    public DateTime LastChecked { get; set; }
    public ProjectResponse Project { get; set; }
    public PropertiesResponse Properties { get; set; }
  }
}
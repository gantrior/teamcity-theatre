using System;

namespace TeamCityTheatre.Core.Client.Responses {
  public class BuildChangeResponse {
    public string Id { get; set; }
    public string Version { get; set; }
    public string Username { get; set; }
    public DateTime Date { get; set; }
    public string Href { get; set; }
    public string WebLink { get; set; }
  }
}
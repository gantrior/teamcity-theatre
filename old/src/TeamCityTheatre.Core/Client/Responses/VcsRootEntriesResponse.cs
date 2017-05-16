using System.Collections.Generic;

namespace TeamCityTheatre.Core.Client.Responses {
  public class VcsRootEntriesResponse {
    public int Count { get; set; }
    public List<VcsRootEntryResponse> VcsRootEntry { get; set; }
  }
}
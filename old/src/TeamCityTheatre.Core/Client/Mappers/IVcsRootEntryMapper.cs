using System.Collections.Generic;
using TeamCityTheatre.Core.Client.Responses;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Core.Client.Mappers {
  public interface IVcsRootEntryMapper {
    VcsRootEntry Map(VcsRootEntryResponse vcsRootEntry);
    IReadOnlyCollection<VcsRootEntry> Map(VcsRootEntriesResponse vcsRootEntries);
  }
}
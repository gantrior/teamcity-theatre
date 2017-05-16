using System;
using System.Collections.Generic;
using System.Linq;
using TeamCityTheatre.Core.Client.Mappers;
using TeamCityTheatre.Core.Client.Responses;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Application.Client.Mappers {
  public class VcsRootEntryMapper : IVcsRootEntryMapper {
    private readonly IVcsRootMapper _vcsRootMapper;

    public VcsRootEntryMapper(IVcsRootMapper vcsRootMapper) {
      if (vcsRootMapper == null) throw new ArgumentNullException(nameof(vcsRootMapper));
      _vcsRootMapper = vcsRootMapper;
    }

    public VcsRootEntry Map(VcsRootEntryResponse vcsRootEntry) {
      if (vcsRootEntry == null) return null;
      return new VcsRootEntry {
        CheckoutRules = vcsRootEntry.CheckoutRules,
        VcsRoot = _vcsRootMapper.Map(vcsRootEntry.VcsRoot)
      };
    }

    public IReadOnlyCollection<VcsRootEntry> Map(VcsRootEntriesResponse vcsRootEntries) {
      if (vcsRootEntries == null || vcsRootEntries.VcsRootEntry == null)
        return new List<VcsRootEntry>();
      return vcsRootEntries.VcsRootEntry.Select(Map).ToList();
    }
  }
}
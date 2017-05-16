using System;
using System.Collections.Generic;
using System.Linq;
using TeamCityTheatre.Core.Client.Mappers;
using TeamCityTheatre.Core.Client.Responses;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Application.Client.Mappers {
  public class SnapshotDependencyMapper : ISnapshotDependencyMapper {
    private readonly IPropertyMapper _propertyMapper;

    public SnapshotDependencyMapper(IPropertyMapper propertyMapper) {
      if (propertyMapper == null) throw new ArgumentNullException(nameof(propertyMapper));
      _propertyMapper = propertyMapper;
    }

    public SnapshotDependency Map(SnapshotDependencyResponse snapshotDependency) {
      if (snapshotDependency == null)
        return null;
      return new SnapshotDependency {
        Id = snapshotDependency.Id,
        Properties = _propertyMapper.Map(snapshotDependency.Properties)
      };
    }

    public IReadOnlyCollection<SnapshotDependency> Map(SnapshotDependenciesResponse snapshotDependencies) {
      if (snapshotDependencies == null || snapshotDependencies.SnapshotDependency == null)
        return new List<SnapshotDependency>();
      return snapshotDependencies.SnapshotDependency.Select(Map).ToList();
    }
  }
}
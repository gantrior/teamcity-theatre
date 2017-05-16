using System;
using System.Collections.Generic;
using System.Linq;
using TeamCityTheatre.Core.Client.Mappers;
using TeamCityTheatre.Core.Client.Responses;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Application.Client.Mappers {
  public class ArtifactDependencyMapper : IArtifactDependencyMapper {
    private readonly IPropertyMapper _propertyMapper;

    public ArtifactDependencyMapper(IPropertyMapper propertyMapper) {
      if (propertyMapper == null) throw new ArgumentNullException("propertyMapper");
      _propertyMapper = propertyMapper;
    }

    public ArtifactDependency Map(ArtifactDependencyResponse artifactDependency) {
      if (artifactDependency == null)
        return null;
      return new ArtifactDependency {
        Id = artifactDependency.Id,
        Type = artifactDependency.Type,
        Properties = _propertyMapper.Map(artifactDependency.Properties)
      };
    }

    public IReadOnlyCollection<ArtifactDependency> Map(ArtifactDependenciesResponse artifactDependencies) {
      if (artifactDependencies == null || artifactDependencies.ArtifactDependency == null)
        return new List<ArtifactDependency>();
      return artifactDependencies.ArtifactDependency.Select(Map).ToList();
    }
  }
}
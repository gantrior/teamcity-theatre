using System;
using TeamCityTheatre.Core.Client.Mappers;
using TeamCityTheatre.Core.Client.Responses;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Application.Client.Mappers {
  public class VcsRootMapper : IVcsRootMapper {
    private readonly Lazy<IProjectMapper> _projectMapper;
    private readonly IPropertyMapper _propertyMapper;

    public VcsRootMapper(Lazy<IProjectMapper> projectMapper, IPropertyMapper propertyMapper) {
      if (projectMapper == null) throw new ArgumentNullException(nameof(projectMapper));
      if (propertyMapper == null) throw new ArgumentNullException(nameof(propertyMapper));
      _projectMapper = projectMapper;
      _propertyMapper = propertyMapper;
    }

    public VcsRoot Map(VcsRootResponse vcsRoot) {
      if (vcsRoot == null) return null;
      return new VcsRoot {
        Href = vcsRoot.Href,
        Id = vcsRoot.Id,
        Name = vcsRoot.Name,
        VcsName = vcsRoot.VcsName,
        LastChecked = vcsRoot.LastChecked,
        Project = _projectMapper.Value.Map(vcsRoot.Project),
        Properties = _propertyMapper.Map(vcsRoot.Properties)
      };
    }
  }
}
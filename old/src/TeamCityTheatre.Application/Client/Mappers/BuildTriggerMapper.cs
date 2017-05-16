using System;
using System.Collections.Generic;
using System.Linq;
using TeamCityTheatre.Core.Client.Mappers;
using TeamCityTheatre.Core.Client.Responses;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Application.Client.Mappers {
  public class BuildTriggerMapper : IBuildTriggerMapper {
    private readonly IPropertyMapper _propertyMapper;

    public BuildTriggerMapper(IPropertyMapper propertyMapper) {
      if (propertyMapper == null) throw new ArgumentNullException(nameof(propertyMapper));
      _propertyMapper = propertyMapper;
    }

    public BuildTrigger Map(BuildTriggerResponse buildTrigger) {
      if (buildTrigger == null)
        return null;

      return new BuildTrigger {
        Id = buildTrigger.Id,
        Type = buildTrigger.Type,
        Properties = _propertyMapper.Map(buildTrigger.Properties)
      };
    }

    public IReadOnlyCollection<BuildTrigger> Map(BuildTriggersResponse buildTrigger) {
      if (buildTrigger == null || buildTrigger.BuildTrigger == null)
        return new List<BuildTrigger>();
      return buildTrigger.BuildTrigger.Select(Map).ToList();
    }
  }
}
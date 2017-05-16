using System;
using System.Collections.Generic;
using System.Linq;
using TeamCityTheatre.Core.Client.Mappers;
using TeamCityTheatre.Core.Client.Responses;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Application.Client.Mappers {
  internal class BuildStepMapper : IBuildStepMapper {
    private readonly IPropertyMapper _propertyMapper;

    public BuildStepMapper(IPropertyMapper propertyMapper) {
      if (propertyMapper == null) throw new ArgumentNullException(nameof(propertyMapper));
      _propertyMapper = propertyMapper;
    }

    public BuildStep Map(BuildStepResponse buildStep) {
      if (buildStep == null) return null;
      return new BuildStep {
        Id = buildStep.Id,
        Name = buildStep.Name,
        Type = buildStep.Type,
        Properties = _propertyMapper.Map(buildStep.Properties)
      };
    }

    public IReadOnlyCollection<BuildStep> Map(BuildStepsResponse buildStep) {
      if (buildStep == null || buildStep.BuildStep == null)
        return new List<BuildStep>();
      return buildStep.BuildStep.Select(Map).ToList();
    }
  }
}
using System;
using System.Collections.Generic;
using System.Linq;
using TeamCityTheatre.Core.Client.Mappers;
using TeamCityTheatre.Core.Client.Responses;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Application.Client.Mappers {
  public class BuildConfigurationMapper : IBuildConfigurationMapper {
    private readonly IAgentRequirementMapper _agentRequirementMapper;
    private readonly IArtifactDependencyMapper _artifactDependencyMapper;
    private readonly IBuildStepMapper _buildStepMapper;
    private readonly IBuildTriggerMapper _buildTriggerMapper;
    private readonly IPropertyMapper _propertyMapper;
    private readonly ISnapshotDependencyMapper _snapshotDependencyMapper;
    private readonly IVcsRootEntryMapper _vcsRootEntryMapper;

    public BuildConfigurationMapper(IAgentRequirementMapper agentRequirementMapper,
      IArtifactDependencyMapper artifactDependencyMapper,
      IPropertyMapper propertyMapper,
      ISnapshotDependencyMapper snapshotDependencyMapper,
      IBuildStepMapper buildStepMapper,
      IBuildTriggerMapper buildTriggerMapper,
      IVcsRootEntryMapper vcsRootEntryMapper) {
      if (agentRequirementMapper == null) throw new ArgumentNullException(nameof(agentRequirementMapper));
      if (artifactDependencyMapper == null) throw new ArgumentNullException(nameof(artifactDependencyMapper));
      if (propertyMapper == null) throw new ArgumentNullException(nameof(propertyMapper));
      if (snapshotDependencyMapper == null) throw new ArgumentNullException(nameof(snapshotDependencyMapper));
      if (buildStepMapper == null) throw new ArgumentNullException(nameof(buildStepMapper));
      if (buildTriggerMapper == null) throw new ArgumentNullException(nameof(buildTriggerMapper));
      if (vcsRootEntryMapper == null) throw new ArgumentNullException(nameof(vcsRootEntryMapper));
      _agentRequirementMapper = agentRequirementMapper;
      _artifactDependencyMapper = artifactDependencyMapper;
      _propertyMapper = propertyMapper;
      _snapshotDependencyMapper = snapshotDependencyMapper;
      _buildStepMapper = buildStepMapper;
      _buildTriggerMapper = buildTriggerMapper;
      _vcsRootEntryMapper = vcsRootEntryMapper;
    }

    public BuildConfiguration Map(BuildTypeResponse buildType) {
      if (buildType == null) return null;
      return new BuildConfiguration {
        Id = buildType.Id,
        Href = buildType.Href,
        Name = buildType.Name,
        ProjectId = buildType.ProjectId,
        WebUrl = buildType.WebUrl,
        AgentRequirements = _agentRequirementMapper.Map(buildType.AgentRequirements),
        ArtifactDependencies = _artifactDependencyMapper.Map(buildType.ArtifactDependencies),
        Parameters = _propertyMapper.Map(buildType.Parameters),
        Settings = _propertyMapper.Map(buildType.Settings),
        SnapshotDependencies = _snapshotDependencyMapper.Map(buildType.SnapshotDependencies),
        Steps = _buildStepMapper.Map(buildType.Steps),
        Triggers = _buildTriggerMapper.Map(buildType.Triggers),
        VcsRootEntries = _vcsRootEntryMapper.Map(buildType.VcsRootEntries)
      };
    }

    public IReadOnlyCollection<BuildConfiguration> Map(BuildTypesResponse buildType) {
      if (buildType == null || buildType.BuildType == null)
        return new List<BuildConfiguration>();
      return buildType.BuildType.Select(Map).ToList();
    }
  }
}
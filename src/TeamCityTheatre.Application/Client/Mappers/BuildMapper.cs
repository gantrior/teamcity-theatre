using System;
using System.Collections.Generic;
using System.Linq;
using TeamCityTheatre.Core.Client.Mappers;
using TeamCityTheatre.Core.Client.Responses;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Application.Client.Mappers {
  public class BuildMapper : IBuildMapper {
    private readonly IAgentMapper _agentMapper;
    private readonly IBuildStatusMapper _buildStatusMapper;
    private readonly IBuildChangeMapper _buildChangeMapper;
    private readonly IBuildConfigurationMapper _buildConfigurationMapper;
    private readonly IPropertyMapper _propertyMapper;

    public BuildMapper(IBuildConfigurationMapper buildConfigurationMapper, IBuildChangeMapper buildChangeMapper,
      IPropertyMapper propertyMapper,
      IAgentMapper agentMapper, IBuildStatusMapper buildStatusMapper) {
      if (buildConfigurationMapper == null) throw new ArgumentNullException(nameof(buildConfigurationMapper));
      if (buildChangeMapper == null) throw new ArgumentNullException(nameof(buildChangeMapper));
      if (propertyMapper == null) throw new ArgumentNullException(nameof(propertyMapper));
      if (agentMapper == null) throw new ArgumentNullException(nameof(agentMapper));
      if (buildStatusMapper == null) throw new ArgumentNullException(nameof(buildStatusMapper));
      _buildConfigurationMapper = buildConfigurationMapper;
      _buildChangeMapper = buildChangeMapper;
      _propertyMapper = propertyMapper;
      _agentMapper = agentMapper;
      _buildStatusMapper = buildStatusMapper;
    }

    public Build Map(BuildResponse build) {
      if (build == null) return null;
      return new Build {
        Id = build.Id,
        BuildConfigurationId = build.BuildTypeId,
        Agent = _agentMapper.Map(build.Agent),
        ArtifactDependencies = Map(build.ArtifactDependencies),
        BranchName = build.BranchName.Replace("pull-requests/", "PR/").Replace("bugfix/", "BF/").Replace("feature/", ""),
        BuildConfiguration = _buildConfigurationMapper.Map(build.BuildType),
        FinishDate = build.FinishDate,
        Href = build.Href,
        IsDefaultBranch = build.DefaultBranch,
        LastChanges = _buildChangeMapper.Map(build.LastChanges),
        Number = build.Number,
        PercentageComplete = build.PercentageComplete ?? build.RunningInfo?.PercentageComplete,
        ElapsedSeconds = build.RunningInfo?.ElapsedSeconds,
        EstimatedTotalSeconds = build.RunningInfo?.EstimatedTotalSeconds,
        CurrentStageText = build.RunningInfo?.CurrentStageText,
        Properties = _propertyMapper.Map(build.Properties),
        QueuedDate = build.QueuedDate,
        SnapshotDependencies = Map(build.SnapshotDependencies),
        StartDate = build.StartDate,
        State = build.State,
        Status = _buildStatusMapper.Map(build.Status),
        StatusText = build.StatusText,
        WebUrl = build.WebUrl
      };
    }

    public IReadOnlyCollection<Build> Map(BuildsResponse builds) {
      if (builds == null || builds.Build == null)
        return new List<Build>();
      return builds.Build.Select(Map).ToList();
    }
  }
}
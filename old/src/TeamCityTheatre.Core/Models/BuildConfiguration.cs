using System.Collections.Generic;

namespace TeamCityTheatre.Core.Models {
  public class BuildConfiguration : IBasicBuildConfiguration, IDetailedBuildConfiguration {
    public string Id { get; set; }
    public string Name { get; set; }
    public string ProjectId { get; set; }
    public string Href { get; set; }
    public string WebUrl { get; set; }
    public IReadOnlyCollection<VcsRootEntry> VcsRootEntries { get; set; }
    public IReadOnlyCollection<Property> Settings { get; set; }
    public IReadOnlyCollection<Property> Parameters { get; set; }
    public IReadOnlyCollection<BuildStep> Steps { get; set; }
    public IReadOnlyCollection<BuildTrigger> Triggers { get; set; }
    public IReadOnlyCollection<SnapshotDependency> SnapshotDependencies { get; set; }
    public IReadOnlyCollection<ArtifactDependency> ArtifactDependencies { get; set; }
    public IReadOnlyCollection<AgentRequirement> AgentRequirements { get; set; }

    public override string ToString() {
      return string.Format("Id: {0}, Name: {1}, ProjectId: {2}", Id, Name, ProjectId);
    }
  }
}
namespace TeamCityTheatre.Core.Client.Responses {
  public class BuildTypeResponse {
    public string Id { get; set; }
    public string Name { get; set; }
    public string ProjectId { get; set; }
    public string Href { get; set; }
    public string WebUrl { get; set; }
    public VcsRootEntriesResponse VcsRootEntries { get; set; }
    public PropertiesResponse Settings { get; set; }
    public PropertiesResponse Parameters { get; set; }
    public BuildStepsResponse Steps { get; set; }
    public BuildTriggersResponse Triggers { get; set; }
    public SnapshotDependenciesResponse SnapshotDependencies { get; set; }
    public ArtifactDependenciesResponse ArtifactDependencies { get; set; }
    public AgentRequirementsResponse AgentRequirements { get; set; }
  }
}
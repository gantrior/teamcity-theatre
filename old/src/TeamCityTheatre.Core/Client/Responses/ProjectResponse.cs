namespace TeamCityTheatre.Core.Client.Responses {
  public class ProjectResponse {
    public bool IsArchived { get; set; }
    public string Href { get; set; }
    public string Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string WebUrl { get; set; }
    public string ParentProjectId { get; set; }
    public ProjectResponse ParentProject { get; set; }
    public BuildTypesResponse BuildTypes { get; set; }
  }
}
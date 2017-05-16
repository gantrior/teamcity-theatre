using System.Collections.Generic;

namespace TeamCityTheatre.Core.Models {
  public class Project : IDetailedProject, IBasicProject {
    public bool IsArchived { get; set; }
    public string Href { get; set; }
    public string Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string WebUrl { get; set; }
    public string ParentProjectId { get; set; }
    public IBasicProject ParentProject { get; set; }
    public IReadOnlyCollection<IBasicBuildConfiguration> BuildConfigurations { get; set; }

    public override string ToString() {
      return string.Format("Id: {0}, Name: {1}, Description: {2}", Id, Name, Description);
    }
  }
}
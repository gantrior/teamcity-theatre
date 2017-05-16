namespace TeamCityTheatre.Core.Models {
  /*
   * <project id="TrackPro22xMaster" @namename="Track Pro 2.2.x" parentProjectId="TrackPro" 
   * href="/httpAuth/app/rest/projects/id:TrackPro22xMaster" webUrl="http://vm64-teamcity:8001/project.html?projectId=TrackPro22xMaster" />
   */

  public interface IBasicProject {
    bool IsArchived { get; }
    string Href { get; }
    string Id { get; }
    string Name { get; }
    string Description { get; }
    string WebUrl { get; }
    string ParentProjectId { get; }
  }
}
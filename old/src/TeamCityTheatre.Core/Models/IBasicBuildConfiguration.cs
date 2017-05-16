namespace TeamCityTheatre.Core.Models {
  /*
   * <buildType id="TrackPro_TrackProGit_Build" name="Build" projectName="Track Pro :: Track Pro 2.2.x" projectId="TrackPro22xMaster" 
   * href="/httpAuth/app/rest/buildTypes/id:TrackPro_TrackProGit_Build" webUrl="http://vm64-teamcity:8001/viewType.html?buildTypeId=TrackPro_TrackProGit_Build" />
   */

  public interface IBasicBuildConfiguration {
    string Id { get; }
    string Name { get; }
    string ProjectId { get; }
    string Href { get; }
    string WebUrl { get; }
  }
}
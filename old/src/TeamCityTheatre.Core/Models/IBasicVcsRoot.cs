namespace TeamCityTheatre.Core.Models {
  /*
   * <vcs-root id="TrackPro" @namename="TrackPro" href="/httpAuth/app/rest/vcs-roots/id:TrackPro" />
   */

  public interface IBasicVcsRoot {
    string Id { get; }
    string Name { get; }
    string Href { get; }
  }
}
namespace TeamCityTheatre.Core.Models {
  /*
   * <agent id="8" name="VM-BUILDAGENT5" typeId="8" href="/httpAuth/app/rest/agents/id:8" />
   */

  public interface IBasicAgent {
    string Id { get; }
    string Name { get; }
    string TypeId { get; }
    string Href { get; }
  }
}
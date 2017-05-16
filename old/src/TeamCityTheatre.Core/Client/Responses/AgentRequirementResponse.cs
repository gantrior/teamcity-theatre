namespace TeamCityTheatre.Core.Client.Responses {
  /*
   * <agent-requirement id="env.SUPPORTS_WEB_PACKAGE_TASK" type="does-not-equal">
   */

  public class AgentRequirementResponse {
    public string Id { get; set; }
    public string Type { get; set; }
    public PropertiesResponse Properties { get; set; }
  }
}
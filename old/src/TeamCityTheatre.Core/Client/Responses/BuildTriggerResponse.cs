namespace TeamCityTheatre.Core.Client.Responses {
  /*
    <trigger id="vcsTrigger" type="vcsTrigger">
      <properties>
        <property name="branchFilter" value="+:*" />
        <property name="quietPeriodMode" value="DO_NOT_USE" />
      </properties>
    </trigger>
   */

  public class BuildTriggerResponse {
    public string Id { get; set; }
    public string Type { get; set; }
    public PropertiesResponse Properties { get; set; }
  }
}
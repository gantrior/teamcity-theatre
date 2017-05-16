using System.Collections.Generic;

namespace TeamCityTheatre.Core.Models {
  /*
   * <agent-requirement id="env.SUPPORTS_WEB_PACKAGE_TASK" type="does-not-equal">
   */

  public class AgentRequirement {
    public string Id { get; set; }
    public string Type { get; set; }
    public IReadOnlyCollection<Property> Properties { get; set; }

    public override string ToString() {
      return string.Format("Id: {0}, Type: {1}", Id, Type);
    }
  }
}
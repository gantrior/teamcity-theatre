using System.Collections.Generic;

namespace TeamCityTheatre.Core.Models {
  /*
    <trigger id="vcsTrigger" type="vcsTrigger">
      <properties>
        <property name="branchFilter" value="+:*" />
        <property name="quietPeriodMode" value="DO_NOT_USE" />
      </properties>
    </trigger>
   */

  public class BuildTrigger {
    public string Id { get; set; }
    public string Type { get; set; }
    public IReadOnlyCollection<Property> Properties { get; set; }

    public override string ToString() {
      return string.Format("Id: {0}, Type: {1}", Id, Type);
    }
  }
}
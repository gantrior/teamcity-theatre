namespace TeamCityTheatre.Core.Models {
  /*
   * <property name="labelingPatterns" value="trunk=>tags" />
   */

  public class Property {
    public string Name { get; set; }
    public string Value { get; set; }

    public override string ToString() {
      return string.Format("Name: {0}, Value: {1}", Name, Value);
    }
  }
}
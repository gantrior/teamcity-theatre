namespace TeamCityTheatre.Core.Models {
  public class Agent : IBasicAgent {
    public string Id { get; set; }
    public string Name { get; set; }
    public string TypeId { get; set; }
    public string Href { get; set; }

    public override string ToString() {
      return string.Format("Id: {0}, Name: {1}", Id, Name);
    }
  }
}
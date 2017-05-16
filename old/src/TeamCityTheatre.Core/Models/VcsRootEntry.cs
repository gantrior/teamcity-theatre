namespace TeamCityTheatre.Core.Models {
  public class VcsRootEntry {
    public IBasicVcsRoot VcsRoot { get; set; }
    public string CheckoutRules { get; set; }

    public override string ToString() {
      return string.Format("VcsRoot: {0}, CheckoutRules: {1}", VcsRoot, CheckoutRules);
    }
  }
}
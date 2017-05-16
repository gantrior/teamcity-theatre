using RestSharp;

namespace TeamCityTheatre.Core.Client {
  public interface ITeamCityRequestPreparer {
    void Prepare(IRestRequest request);
  }
}
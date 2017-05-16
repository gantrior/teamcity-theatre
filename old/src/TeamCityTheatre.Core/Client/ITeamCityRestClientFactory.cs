using RestSharp;

namespace TeamCityTheatre.Core.Client {
  public interface ITeamCityRestClientFactory {
    IRestClient Create(IConnectionSettings connectionSettings);
  }
}
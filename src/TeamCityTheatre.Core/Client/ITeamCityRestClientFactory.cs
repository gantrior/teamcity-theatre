using RestSharp;
using TeamCityTheatre.Core.Options;

namespace TeamCityTheatre.Core.Client {
  public interface ITeamCityRestClientFactory {
    IRestClient Create(ConnectionOptions connectionOptions);
  }
}
using System.Threading.Tasks;
using RestSharp;

namespace TeamCityTheatre.Core.Client {
  public interface ITeamCityClient {
    Task<TResponse> ExecuteRequestAsync<TResponse>(IRestRequest restRequest) where TResponse : new();
  }
}
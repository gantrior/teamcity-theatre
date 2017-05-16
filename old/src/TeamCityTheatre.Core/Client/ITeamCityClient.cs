using System.Threading.Tasks;
using RestSharp;

namespace TeamCityTheatre.Core.Client {
  public interface ITeamCityClient {
    TResponse ExecuteRequest<TResponse>(IRestRequest restRequest) where TResponse : new();
    Task<TResponse> ExecuteRequestAsync<TResponse>(IRestRequest restRequest);
  }
}
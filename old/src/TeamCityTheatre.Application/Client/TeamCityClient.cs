using System;
using System.Threading.Tasks;
using RestSharp;
using TeamCityTheatre.Core.Client;

namespace TeamCityTheatre.Application.Client {
  public class TeamCityClient : ITeamCityClient {
    private readonly IRestClient _client;
    private readonly IResponseValidator _responseValidator;
    private readonly ITeamCityRequestPreparer _teamCityRequestPreparer;

    public TeamCityClient(ITeamCityRestClientFactory teamCityRestClientFactory, IConnectionSettings connectionSettings,
      IResponseValidator responseValidator, ITeamCityRequestPreparer teamCityRequestPreparer) {
      if (teamCityRestClientFactory == null) throw new ArgumentNullException(nameof(teamCityRestClientFactory));
      if (connectionSettings == null) throw new ArgumentNullException(nameof(connectionSettings));
      if (responseValidator == null) throw new ArgumentNullException(nameof(responseValidator));
      if (teamCityRequestPreparer == null) throw new ArgumentNullException(nameof(teamCityRequestPreparer));
      _responseValidator = responseValidator;
      _teamCityRequestPreparer = teamCityRequestPreparer;
      _client = teamCityRestClientFactory.Create(connectionSettings);
    }

    public TResponse ExecuteRequest<TResponse>(IRestRequest restRequest) where TResponse : new() {
      _teamCityRequestPreparer.Prepare(restRequest);
      var response = _client.Execute<TResponse>(restRequest);
      _responseValidator.Validate(response);
      return response.Data;
    }

    public async Task<TResponse> ExecuteRequestAsync<TResponse>(IRestRequest restRequest) {
      _teamCityRequestPreparer.Prepare(restRequest);
      var response = await _client.ExecuteTaskAsync<TResponse>(restRequest);
      _responseValidator.Validate(response);
      return response.Data;
    }
  }
}
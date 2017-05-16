using System;
using System.Threading.Tasks;
using RestSharp;

namespace TeamCityTheatre.Core.Client {
  public class TeamCityClient : ITeamCityClient {
    readonly IRestClient _client;
    readonly IResponseValidator _responseValidator;
    readonly ITeamCityRequestPreparer _teamCityRequestPreparer;

    public TeamCityClient(
      ITeamCityRestClientFactory teamCityRestClientFactory, IConnectionSettings connectionSettings,
      IResponseValidator responseValidator, ITeamCityRequestPreparer teamCityRequestPreparer) {
      if (connectionSettings == null) throw new ArgumentNullException(nameof(connectionSettings));
      _responseValidator = responseValidator ?? throw new ArgumentNullException(nameof(responseValidator));
      _teamCityRequestPreparer = teamCityRequestPreparer ?? throw new ArgumentNullException(nameof(teamCityRequestPreparer));
      _client = teamCityRestClientFactory?.Create(connectionSettings) ?? throw new ArgumentNullException(nameof(teamCityRestClientFactory));
    }

    public async Task<TResponse> ExecuteRequestAsync<TResponse>(IRestRequest restRequest) where TResponse : new() {
      _teamCityRequestPreparer.Prepare(restRequest);
      var taskCompletionSource = new TaskCompletionSource<IRestResponse<TResponse>>();
      _client.ExecuteAsync<TResponse>(restRequest, restResponse => {
        if (restResponse.ErrorException != null) {
          const string message = "Failed to make request to the TeamCity server";
          taskCompletionSource.SetException(new Exception(message, restResponse.ErrorException));
        } else {
          taskCompletionSource.SetResult(restResponse);
        }
      });
      var responseTask = taskCompletionSource.Task;
      var response = await responseTask;
      _responseValidator.Validate(response);
      return response.Data;
    }
  }
}
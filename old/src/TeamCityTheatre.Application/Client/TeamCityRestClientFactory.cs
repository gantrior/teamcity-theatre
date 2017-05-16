using System;
using RestSharp;
using RestSharp.Authenticators;
using TeamCityTheatre.Core.Client;

namespace TeamCityTheatre.Application.Client {
  public class TeamCityRestClientFactory : ITeamCityRestClientFactory {
    public IRestClient Create(IConnectionSettings connectionSettings) {
      if (connectionSettings == null) throw new ArgumentNullException(nameof(connectionSettings));
      return new RestClient {
        BaseUrl = new Uri(connectionSettings.Url, new Uri("httpAuth/app/rest", UriKind.Relative)),
        Authenticator = new HttpBasicAuthenticator(connectionSettings.Username, connectionSettings.Password),
        DefaultParameters = {
          new Parameter {Type = ParameterType.HttpHeader, Name = "Accept", Value = "application/json"}
        }
      };
    }
  }
}
using System;
using System.Net;
using RestSharp;
using TeamCityTheatre.Core.Client;

namespace TeamCityTheatre.Application.Client {
  public class ResponseValidator : IResponseValidator {
    public void Validate<TResponse>(IRestResponse<TResponse> response) {
      if (response.StatusCode == HttpStatusCode.Unauthorized)
        throw new ApplicationException("Authorization failed");
      if (response.ErrorException != null)
        throw response.ErrorException;
    }
  }
}
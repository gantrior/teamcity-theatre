using System;
using System.Net;
using RestSharp;

namespace TeamCityTheatre.Core.Client {
  public class ResponseValidator : IResponseValidator {
    public void Validate<TResponse>(IRestResponse<TResponse> response) {
      if (response.StatusCode == HttpStatusCode.Unauthorized)
        throw new Exception("Authorization failed");
      if (response.ErrorException != null)
        throw response.ErrorException;
    }
  }
}
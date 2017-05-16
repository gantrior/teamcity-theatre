using RestSharp;

namespace TeamCityTheatre.Core.Client {
  public interface IResponseValidator {
    void Validate<TResponse>(IRestResponse<TResponse> response);
  }
}
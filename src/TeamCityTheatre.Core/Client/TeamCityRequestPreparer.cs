using RestSharp;

namespace TeamCityTheatre.Core.Client {
  public class TeamCityRequestPreparer : ITeamCityRequestPreparer {
    public void Prepare(IRestRequest request) {
      request.DateFormat = "yyyyMMdd'T'HHmmsszzz";
    }
  }
}
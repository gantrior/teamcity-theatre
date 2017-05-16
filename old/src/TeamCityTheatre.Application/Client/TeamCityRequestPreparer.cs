using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RestSharp;
using TeamCityTheatre.Core.Client;

namespace TeamCityTheatre.Application.Client
{

  public class TeamCityRequestPreparer : ITeamCityRequestPreparer {
    public void Prepare(IRestRequest request) {
      request.DateFormat = "yyyyMMdd'T'HHmmsszzz";
    }
  }
}

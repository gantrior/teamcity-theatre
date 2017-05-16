using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RestSharp;
using TeamCityTheatre.Core.Client;
using TeamCityTheatre.Core.Client.Mappers;
using TeamCityTheatre.Core.Client.Responses;
using TeamCityTheatre.Core.DataServices;
using TeamCityTheatre.Core.DataServices.Locators;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Application.DataServices {
  public class ProjectDataService : IProjectDataService {
    private readonly IProjectMapper _projectMapper;
    private readonly ITeamCityClient _teamCityClient;

    public ProjectDataService(ITeamCityClient teamCityClient, IProjectMapper projectMapper) {
      if (teamCityClient == null) throw new ArgumentNullException(nameof(teamCityClient));
      if (projectMapper == null) throw new ArgumentNullException(nameof(projectMapper));
      _teamCityClient = teamCityClient;
      _projectMapper = projectMapper;
    }

    public async Task<IEnumerable<IBasicProject>> GetAllProjectsAsync() {
      var request = new RestRequest("projects", Method.GET);
      var response = await _teamCityClient.ExecuteRequestAsync<ProjectsResponse>(request);
      return _projectMapper.Map(response);
    }

    public async Task<IDetailedProject> GetProjectDetailsAsync(IProjectLocator projectLocator) {
      var request = new RestRequest("projects/{locator}", Method.GET);
      request.AddUrlSegment("locator", projectLocator.Serialize());
      var response = await _teamCityClient.ExecuteRequestAsync<ProjectResponse>(request);
      return _projectMapper.Map(response);
    }
  }
}
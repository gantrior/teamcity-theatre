using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using TeamCityTheatre.Application.DataServices.Locators;
using TeamCityTheatre.Core.DataServices;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Web.Api {
  [RoutePrefix("api/projects")]
  public class ProjectsController : ApiController {
    private readonly IProjectDataService _projectDataService;

    public ProjectsController(IProjectDataService projectDataService) {
      if (projectDataService == null) throw new ArgumentNullException(nameof(projectDataService));
      _projectDataService = projectDataService;
    }

    [Route("")]
    public async Task<IEnumerable<IBasicProject>> GetAllProjects() {
      return await _projectDataService.GetAllProjectsAsync();
    }

    [Route("{id}")]
    public async Task<IDetailedProject> GetProjectById(string id) {
      return await _projectDataService.GetProjectDetailsAsync(new ProjectByIdLocator(id));
    }


  }
}

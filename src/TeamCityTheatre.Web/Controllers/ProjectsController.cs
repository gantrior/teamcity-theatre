using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TeamCityTheatre.Core.DataServices;
using TeamCityTheatre.Core.DataServices.Locators;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Web.Controllers {
  [Route("api/projects")]
  public class ProjectsController : Controller {
    readonly IProjectDataService _projectDataService;

    public ProjectsController(IProjectDataService projectDataService) {
      _projectDataService = projectDataService ?? throw new ArgumentNullException(nameof(projectDataService));
    }

    // GET: api/projects
    [HttpGet]
    public async Task<IEnumerable<IBasicProject>> GetAsync() {
      return await _projectDataService.GetAllProjectsAsync();
    }

    // GET api/projects/broka-50x
    [HttpGet("{id}")]
    public async Task<IDetailedProject> GetAsync(string id) {
      return await _projectDataService.GetProjectDetailsAsync(new ProjectByIdLocator(id));
    }
  }
}
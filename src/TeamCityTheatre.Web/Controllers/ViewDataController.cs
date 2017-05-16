using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TeamCityTheatre.Core.QueryServices;
using TeamCityTheatre.Core.QueryServices.Models;

namespace TeamCityTheatre.Web.Controllers {
  [Route("api/projects")]
  public class ViewDataController : Controller {
    readonly IViewService _viewsService;

    public ViewDataController(IViewService viewsService) {
      _viewsService = viewsService;
    }

    [HttpGet("{id:guid}")]
    public async Task<ViewData> Get(Guid id) {
      return await _viewsService.GetLatestViewDataAsync(id.ToString());
    }
  }
}
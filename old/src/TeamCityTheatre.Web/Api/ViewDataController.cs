using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using TeamCityTheatre.Core.QueryServices;
using TeamCityTheatre.Core.QueryServices.Models;

namespace TeamCityTheatre.Web.Api
{
  [RoutePrefix("api/viewdata")]
  public class ViewDataController: ApiController
  {
    private readonly IViewService _viewsService;

    public ViewDataController(IViewService viewsService) {
      _viewsService = viewsService;
    }

    [Route("{id:guid}")]
    public async Task<ViewData> Get(Guid id) {
      return await _viewsService.GetLatestViewDataAsync(id.ToString());
    }
  }
}
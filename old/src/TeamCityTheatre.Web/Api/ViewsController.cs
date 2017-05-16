using System;
using System.Collections.Generic;
using System.Web.Http;
using TeamCityTheatre.Core.ApplicationModels;
using TeamCityTheatre.Core.DataServices;

namespace TeamCityTheatre.Web.Api {
  [RoutePrefix("api/views")]
  public class ViewsController : ApiController {
    private readonly IViewDataService _viewDataService;

    public ViewsController(IViewDataService viewDataService) {
      if (viewDataService == null) throw new ArgumentNullException(nameof(viewDataService));
      _viewDataService = viewDataService;
    }

    [HttpGet, Route("")]
    public IEnumerable<View> Get() {
      return _viewDataService.GetAllViews();
    }

    [HttpGet, Route("{id:guid}")]
    public View Get(Guid id) {
      return _viewDataService.GetViewById(id);
    }

    [HttpGet, Route("{name}")]
    public View Get(string name) {
      return _viewDataService.GetViewByName(name);
    }

    [HttpPost, Route("")]
    public View Post(View view) {
      return _viewDataService.SaveView(view);
    }

    [HttpDelete, Route("{id}")]
    public void Delete(Guid id) {
      var view = _viewDataService.GetViewById(id);
      if (view != null) {
        _viewDataService.DeleteView(view);
      }
    }
  }
}
﻿using Microsoft.AspNetCore.Mvc;

namespace TeamCityTheatre.Web.Controllers {
  public class HomeController : ControllerBase {
    public IActionResult Index() {
      return RedirectToAction("Index", "Dashboard");
    }
  }
}
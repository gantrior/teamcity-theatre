using System;
using System.Collections.Generic;
using TeamCityTheatre.Core.ApplicationModels;

namespace TeamCityTheatre.Core.DataServices {
  public interface IViewDataService {
    IEnumerable<View> GetAllViews();
    View GetViewById(Guid id);
    View GetViewByName(string name);
    View SaveView(View view);
    void DeleteView(View view);
  }
}

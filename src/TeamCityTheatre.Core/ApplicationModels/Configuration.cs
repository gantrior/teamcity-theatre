using System.Collections.Generic;
using System.Linq;

namespace TeamCityTheatre.Core.ApplicationModels {
  public class Configuration {
    public Configuration() {
      Views = Enumerable.Empty<View>();
    }

    public IEnumerable<View> Views { get; set; }
  }
}
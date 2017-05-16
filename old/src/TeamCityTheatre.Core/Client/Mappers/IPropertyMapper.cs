using System.Collections.Generic;
using TeamCityTheatre.Core.Client.Responses;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Core.Client.Mappers {
  public interface IPropertyMapper {
    Property Map(PropertyResponse property);
    IReadOnlyCollection<Property> Map(PropertiesResponse properties);
  }
}
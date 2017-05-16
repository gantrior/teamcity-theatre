using System;

namespace TeamCityTheatre.Core.Client {
  public interface IConnectionSettings {
    Uri Url { get; }
    string Username { get; }
    string Password { get; }
  }
}
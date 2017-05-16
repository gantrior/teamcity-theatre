using System;

namespace TeamCityTheatre.Core.Client {
  public sealed class TeamCityConnectionSettings : IConnectionSettings {
    const string UrlAttribute = "url";
    const string UsernameAttribute = "username";
    const string PasswordAttribute = "password";

    public Uri Url { get; set; }

    public string Username { get; set; }

    public string Password { get; set; }
  }
}
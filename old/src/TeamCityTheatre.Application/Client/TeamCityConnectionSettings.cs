using System;
using System.Configuration;
using TeamCityTheatre.Core.Client;

namespace TeamCityTheatre.Application.Client {
  public sealed class TeamCityConnectionSettings : ConfigurationSection, IConnectionSettings {
    private const string UrlAttribute = "url";
    private const string UsernameAttribute = "username";
    private const string PasswordAttribute = "password";

    public static TeamCityConnectionSettings Instance {
      get { return ConfigurationManager.GetSection("teamCityConnectionSettings") as TeamCityConnectionSettings; }
    }

    [ConfigurationProperty(UrlAttribute, IsRequired = true)]
    public Uri Url {
      get { return (Uri) base[UrlAttribute]; }
      set { base[UrlAttribute] = value; }
    }

    [ConfigurationProperty(UsernameAttribute, IsRequired = true)]
    public string Username {
      get { return (string) base[UsernameAttribute]; }
      set { base[UsernameAttribute] = value; }
    }

    [ConfigurationProperty(PasswordAttribute, IsRequired = true)]
    public string Password {
      get { return (string) base[PasswordAttribute]; }
      set { base[PasswordAttribute] = value; }
    }
  }
}
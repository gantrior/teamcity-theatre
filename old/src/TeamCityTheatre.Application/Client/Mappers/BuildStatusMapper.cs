﻿using System;
using TeamCityTheatre.Core.Client.Mappers;
using TeamCityTheatre.Core.Models;

namespace TeamCityTheatre.Application.Client.Mappers
{
  public class BuildStatusMapper: IBuildStatusMapper
  {
    public BuildStatus Map(string buildStatus) {
      switch (buildStatus) {
        case "SUCCESS": return BuildStatus.Success;
        case "FAILURE": return BuildStatus.Failure;
        case "ERROR": return BuildStatus.Error;
        default: return BuildStatus.Unknown;
      }
    }
  }
}

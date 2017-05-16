using System.Collections.Generic;

namespace TeamCityTheatre.Core.Models {
  /*
    <step id="RUNNER_120" name="Build" type="MSBuild">
      <properties>
        <property name="build-file-path" value="TrackPro.proj" />
        <property name="dotNetCoverage.NCover.HTMLReport.File.Sort" value="0" />
        <property name="dotNetCoverage.NCover.HTMLReport.File.Type" value="1" />
        <property name="dotNetCoverage.NCover.platformBitness" value="x86" />
        <property name="dotNetCoverage.NCover.platformVersion" value="v2.0" />
        <property name="dotNetCoverage.NCover.Reg" value="selected" />
        <property name="dotNetCoverage.NCover3.args" value="//ias .*" />
        <property name="dotNetCoverage.NCover3.platformBitness" value="x86" />
        <property name="dotNetCoverage.NCover3.platformVersion" value="v2.0" />
        <property name="dotNetCoverage.NCover3.Reg" value="selected" />
        <property name="dotNetCoverage.NCover3.reporter.executable.args" 
                  value="//or FullCoverageReport:Html:{teamcity.report.path}" />
        <property name="dotNetCoverage.PartCover.includes" value="[*]*" />
        <property name="dotNetCoverage.PartCover.platformBitness" value="x86" />
        <property name="dotNetCoverage.PartCover.platformVersion" value="v2.0" />
        <property name="dotNetCoverage.PartCover.Reg" value="selected" />
        <property name="msbuild_version" value="4.0" />
        <property name="run-platform" value="x64" />
        <property name="targets" value="Deploy" />
        <property name="teamcity.step.mode" value="execute_if_failed" />
        <property name="toolsVersion" value="4.0" />
      </properties>
    </step>
   */

  public class BuildStep {
    public string Id { get; set; }
    public string Name { get; set; }
    public string Type { get; set; }
    public IReadOnlyCollection<Property> Properties { get; set; }
  }
}
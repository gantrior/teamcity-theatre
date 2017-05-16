using System.Collections.Generic;

namespace TeamCityTheatre.Core.Models {
  /*
  <buildType id="TrackPro_TrackProGit_Build" name="Build" 
             projectName="Track Pro :: Track Pro 2.2.x" projectId="TrackPro22xMaster" 
             href="/httpAuth/app/rest/buildTypes/id:TrackPro_TrackProGit_Build" 
             webUrl="http://vm64-teamcity:8001/viewType.html?buildTypeId=TrackPro_TrackProGit_Build">
    <project id="TrackPro22xMaster" name="Track Pro 2.2.x" parentProjectId="TrackPro" 
             href="/httpAuth/app/rest/projects/id:TrackPro22xMaster" 
             webUrl="http://vm64-teamcity:8001/project.html?projectId=TrackPro22xMaster" />
    <vcs-root-entries>
      <vcs-root-entry id="TrackPro_Git">
        <vcs-root id="TrackPro_Git" name="TrackPro_Git" href="/httpAuth/app/rest/vcs-roots/id:TrackPro_Git" />
        <checkout-rules />
      </vcs-root-entry>
    </vcs-root-entries>
    <settings count="16">
      <property name="allowExternalStatus" value="false" />
      <property name="artifactRules" value="Deployment/Target/**=>Target.zip Deployment/InternalTools/**=>InternalTools.zip" />
      <property name="buildNumberCounter" value="3160" />
      <property name="buildNumberPattern" value="%ProjectBuildNumber%.%build.counter%" />
      <property name="checkoutDirectory" />
      <property name="checkoutMode" value="ON_SERVER" />
      <property name="cleanBuild" value="true" />
      <property name="enableHangingBuildsDetection" value="true" />
      <property name="executionTimeoutMin" value="0" />
      <property name="maximumNumberOfBuilds" value="0" />
      <property name="shouldFailBuildIfTestsFailed" value="true" />
      <property name="shouldFailBuildOnAnyErrorMessage" value="false" />
      <property name="shouldFailBuildOnBadExitCode" value="true" />
      <property name="shouldFailBuildOnOOMEOrCrash" value="true" />
      <property name="showDependenciesChanges" value="false" />
      <property name="vcsLabelingBranchFilter" value="+:<default>" />
    </settings>
    <parameters count="3" href="/app/rest/buildTypes/id:TrackPro_TrackProGit_Build/parameters">
      <property name="env.EnableNuGetPackageRestore" value="true" />
      <property name="ProjectBuildNumber" value="2.2.0" own="true" />
      <property name="system.UltraGendaProductFileVersion" value="%env.BUILD_NUMBER%" own="true" />
    </parameters>
    <steps count="2">
      ...
    </steps>
    <features />
    <triggers count="1">
      ...
    </triggers>
    <snapshot-dependencies />
    <artifact-dependencies />
    <agent-requirements count="1">
    <agent-requirement id="env.SUPPORTS_WEB_PACKAGE_TASK" type="does-not-equal"></agent-requirements>
    <builds href="/httpAuth/app/rest/buildTypes/id:TrackPro_TrackProGit_Build/builds/" />
  </buildType>
   */

  public interface IDetailedBuildConfiguration : IBasicBuildConfiguration {
    IReadOnlyCollection<VcsRootEntry> VcsRootEntries { get; }
    IReadOnlyCollection<Property> Settings { get; }
    IReadOnlyCollection<Property> Parameters { get; }
    IReadOnlyCollection<BuildStep> Steps { get; }
    IReadOnlyCollection<BuildTrigger> Triggers { get; }
    IReadOnlyCollection<SnapshotDependency> SnapshotDependencies { get; }
    IReadOnlyCollection<ArtifactDependency> ArtifactDependencies { get; }
    IReadOnlyCollection<AgentRequirement> AgentRequirements { get; }
  }
}
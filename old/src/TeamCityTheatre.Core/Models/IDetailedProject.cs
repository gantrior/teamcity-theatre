using System.Collections.Generic;

namespace TeamCityTheatre.Core.Models {
  /*
  <project id="TrackPro22xMaster" name="Track Pro 2.2.x" parentProjectId="TrackPro" 
           href="/httpAuth/app/rest/projects/id:TrackPro22xMaster" webUrl="http://vm64-teamcity:8001/project.html?projectId=TrackPro22xMaster">
    <parentProject id="TrackPro" name="Track Pro" parentProjectId="_Root" 
                   description="Planned appointments follow-up" href="/httpAuth/app/rest/projects/id:TrackPro" 
                   webUrl="http://vm64-teamcity:8001/project.html?projectId=TrackPro" />
    <buildTypes count="9">
      <buildType id="TrackPro_TrackProGit_Build" name="Build" projectName="Track Pro :: Track Pro 2.2.x" projectId="TrackPro22xMaster" href="/httpAuth/app/rest/buildTypes/id:TrackPro_TrackProGit_Build" webUrl="http://vm64-teamcity:8001/viewType.html?buildTypeId=TrackPro_TrackProGit_Build" />
      <buildType id="TrackPro22xMaster_InstallOnUgSdePro68" name="Install on UG-SDE-PRO68" description="http://VM-PRO-TEST64/TrackPro" projectName="Track Pro :: Track Pro 2.2.x" projectId="TrackPro22xMaster" href="/httpAuth/app/rest/buildTypes/id:TrackPro22xMaster_InstallOnUgSdePro68" webUrl="http://vm64-teamcity:8001/viewType.html?buildTypeId=TrackPro22xMaster_InstallOnUgSdePro68" />
      <buildType id="TrackPro22xMaster_InstallOnVmProTest32" name="Install on VM-PRO-TEST32" paused="true" description="http://VM-PRO-TEST32/TrackPro" projectName="Track Pro :: Track Pro 2.2.x" projectId="TrackPro22xMaster" href="/httpAuth/app/rest/buildTypes/id:TrackPro22xMaster_InstallOnVmProTest32" webUrl="http://vm64-teamcity:8001/viewType.html?buildTypeId=TrackPro22xMaster_InstallOnVmProTest32" />
      <buildType id="TrackPro22xMaster_InstallOnVmProTest64" name="Install on VM-PRO-TEST64" description="http://VM-PRO-TEST64/TrackPro" projectName="Track Pro :: Track Pro 2.2.x" projectId="TrackPro22xMaster" href="/httpAuth/app/rest/buildTypes/id:TrackPro22xMaster_InstallOnVmProTest64" webUrl="http://vm64-teamcity:8001/viewType.html?buildTypeId=TrackPro22xMaster_InstallOnVmProTest64" />
      <buildType id="TrackPro22xMaster_Installer32" name="Installer32" paused="true" projectName="Track Pro :: Track Pro 2.2.x" projectId="TrackPro22xMaster" href="/httpAuth/app/rest/buildTypes/id:TrackPro22xMaster_Installer32" webUrl="http://vm64-teamcity:8001/viewType.html?buildTypeId=TrackPro22xMaster_Installer32" />
      <buildType id="TrackPro_TrackProGit_Installer64" name="Installer64" projectName="Track Pro :: Track Pro 2.2.x" projectId="TrackPro22xMaster" href="/httpAuth/app/rest/buildTypes/id:TrackPro_TrackProGit_Installer64" webUrl="http://vm64-teamcity:8001/viewType.html?buildTypeId=TrackPro_TrackProGit_Installer64" />
      <buildType id="TrackPro22xMaster_IntegrationTest" name="Integration Test" projectName="Track Pro :: Track Pro 2.2.x" projectId="TrackPro22xMaster" href="/httpAuth/app/rest/buildTypes/id:TrackPro22xMaster_IntegrationTest" webUrl="http://vm64-teamcity:8001/viewType.html?buildTypeId=TrackPro22xMaster_IntegrationTest" />
      <buildType id="TrackPro_TrackProGit_UnitTest" name="Unit Test" projectName="Track Pro :: Track Pro 2.2.x" projectId="TrackPro22xMaster" href="/httpAuth/app/rest/buildTypes/id:TrackPro_TrackProGit_UnitTest" webUrl="http://vm64-teamcity:8001/viewType.html?buildTypeId=TrackPro_TrackProGit_UnitTest" />
      <buildType id="TrackPro22xMaster_ValidateInstaller" name="ValidateInstaller" projectName="Track Pro :: Track Pro 2.2.x" projectId="TrackPro22xMaster" href="/httpAuth/app/rest/buildTypes/id:TrackPro22xMaster_ValidateInstaller" webUrl="http://vm64-teamcity:8001/viewType.html?buildTypeId=TrackPro22xMaster_ValidateInstaller" />
    </buildTypes>
    <templates count="1">
      <buildType id="TrackPro22xMaster_RemoteInstall" name="Remote Install" templateFlag="true" projectName="Track Pro :: Track Pro 2.2.x" projectId="TrackPro22xMaster" href="/httpAuth/app/rest/buildTypes/id:TrackPro22xMaster_RemoteInstall" />
    </templates>
    <parameters count="2" href="/app/rest/projects/id:TrackPro22xMaster/parameters">
      <property name="env.EnableNuGetPackageRestore" value="true" own="true" />
      <property name="ProjectBuildNumber" value="2.2.0" own="true" />
    </parameters>
    <vcsRoots href="/httpAuth/app/rest/vcs-roots?locator=project:(id:TrackPro22xMaster)" />
    <projects count="0" />
  </project>
   */

  public interface IDetailedProject : IBasicProject {
    IBasicProject ParentProject { get; }
    IReadOnlyCollection<IBasicBuildConfiguration> BuildConfigurations { get; }
  }
}
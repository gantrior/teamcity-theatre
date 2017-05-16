using System;
using System.Collections.Generic;

namespace TeamCityTheatre.Core.Models {
  /*
  <vcs-root id="TrackPro" name="TrackPro" vcsName="svn" status="FINISHED" lastChecked="20150226T145957+0100" href="/httpAuth/app/rest/vcs-roots/id:TrackPro">
    <project id="_Root" name="<Root project>" description="Contains all other projects" 
                        href="/httpAuth/app/rest/projects/id:_Root" webUrl="http://vm64-teamcity:8001/project.html?projectId=_Root" />
    <properties>
      <property name="externals-mode" value="externals-full" />
      <property name="labelingMessage" value="Labeled automatically by TeamCity" />
      <property name="labelingPatterns" value="trunk=>tags" />
      <property name="secure:svn-password" />
      <property name="svn-config-directory" value="C:\Documents and Settings\Default User\Application Data\Subversion" />
      <property name="svn-use-default-config-directory" value="true" />
      <property name="url" value="http://cameron/svn/Development/TrackPro" />
      <property name="user" value="teamcity@ultragenda.com" />
      <property name="working-copy-format" value="1.7" />
    </properties>
    <vcsRootInstances href="/httpAuth/app/rest/vcs-root-instances?locator=vcsRoot:(id:TrackPro)" />
  </vcs-root>
   */

  public interface IDetailedVcsRoot : IBasicVcsRoot {
    string VcsName { get; }
    DateTime LastChecked { get; }
    IBasicProject Project { get; }
    IReadOnlyCollection<Property> Properties { get; }
  }
}
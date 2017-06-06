import {IBasicBuildConfiguration, IBasicProject} from "./contracts";

interface IProjectConstructorParameters extends IBasicProject {
  children? : Project[] | null
  buildConfigurations?: IBasicBuildConfiguration[] | null;
}

export class Project {
  isArchived: boolean;
  href: string;
  id: string;
  name: string;
  description: string | null;
  webUrl: string;
  parentProjectId : string | null;
  children: Project[];
  isExpanded: boolean;
  buildConfigurations: IBasicBuildConfiguration[] | null;

  constructor(params: IProjectConstructorParameters) {
    if(!params) throw new Error("Invalid constructor parameters in BasicProject: params");
    this.isArchived = params.isArchived;
    this.href = params.href;
    this.id = params.id;
    this.name = params.name;
    this.description = params.description;
    this.webUrl = params.webUrl;
    this.parentProjectId = params.parentProjectId;
    this.children = params.children || [];
    this.buildConfigurations = params.buildConfigurations || null;
    this.isExpanded = false;
  }

  withChildren(children: Project[]) {
    return new Project({
      ...(this as Project),
      children: children
    });
  }

  withBuildConfigurations(buildConfigurations: IBasicBuildConfiguration[]) {
    return new Project({
      ...(this as Project),
      buildConfigurations: buildConfigurations
    });
  }

  expand() {
    return new Project({
      ...(this as Project),
      isExpanded: true
    });
  }

  collapse() {
    return new Project({
      ...(this as Project),
      isExpanded: false
    });
  }

  toggleExpandOrCollapse() {
    return this.isExpanded ? this.collapse() : this.expand();
  }

  // propagate updates to a project down the chain
  withProject(project: Project) : Project {
    if(this.id === project.id) return project; // if this is the project that was updated, return the new version
    return new Project({
      ...(this as Project),
      children: this.children.map(c => c.withProject(project))
    });
  }

  hasChildren() {
    return this.children.length > 0;
  }
}
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import "rxjs/add/observable/combineLatest";
import "rxjs/add/observable/defer";
import "rxjs/add/observable/dom/ajax";

import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/merge";
import "rxjs/add/operator/scan";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/switchMap";

import {IBasicProject, IDetailedProject, IView} from "../shared/contracts";
import {Project} from "../shared/models";

export interface ISettingsState {
  views: IView[] | null;
  selectedView: IView | null;
  rootProject: Project | null;
  selectedProject: Project | null;
}

const allViews: Observable<IView[] | null> = Observable
  .defer(() => Observable.ajax.getJSON<IView[]>("api/views"))
  .do(x => console.log(`Loaded ${x.length} views`))
  .startWith(null);

const toProjects = (basicProjects: IBasicProject[]) => {
  const projects = basicProjects.map(p => new Project(p));

  const findChildren = (id: string) => projects.filter(p => p.parentProjectId === id);

  for(let project of projects) {
    project.setChildren(findChildren(project.id));
  }

  return projects;
};

const initialRootProjects: Observable<Project> = Observable
  .defer(() => Observable.ajax.getJSON<IBasicProject[]>("api/projects"))
  .map(toProjects)
  .map(projects => projects.filter(p => p.parentProjectId === null)[0])
  .map(rootProject => rootProject.expand())
  .do(x => console.log(`Initial root project loaded: ${x.name}`));

const selectedViewsSubject = new Subject<IView>();
export const selectView = (view: IView) => selectedViewsSubject.next(view);
const selectedViews: Observable<IView> = selectedViewsSubject
  .startWith(null)
  .do(x => console.log(`Selected a view: ${JSON.stringify(x)}`));

const selectedProjectsSubject = new Subject<Project>();
export const selectProject = (project: Project) => selectedProjectsSubject.next(project);

const manualProjectUpdates = new Subject<Project>();
export const updateProject = (project: Project) => manualProjectUpdates.next(project);

const selectedProjects: Observable<Project> = selectedProjectsSubject
  .switchMap(project => Observable.ajax.getJSON<IDetailedProject>(`api/projects/${project.id}`)
    .map(detailedProject => project.withBuildConfigurations(detailedProject.buildConfigurations)))
  .do(x => console.log(`Selected a project: ${x.name}`))
  .startWith(null);

const projectUpdates : Observable<Project> = manualProjectUpdates.merge(selectedProjects)
  .do(x => console.log(`Registered update for project: ${x ? x.name : null}`));

const rootProjects: Observable<Project> = initialRootProjects.switchMap(initialRootProject =>
  projectUpdates
    .scan((previousRootProject, projectUpdate) => projectUpdate !== null ? previousRootProject.update(projectUpdate) : previousRootProject, initialRootProject)
    .startWith(initialRootProject))
  .do(x => console.log(`New root project`));

export const state: Observable<ISettingsState> = Observable.combineLatest(
  allViews, selectedViews, rootProjects, selectedProjects,
  (vs, sv, rp, sp) => ({
    views: vs,
    selectedView: sv,
    rootProject: rp,
    selectedProject: sp
  })
).do(x => console.log(`New state`));
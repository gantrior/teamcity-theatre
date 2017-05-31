import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import "rxjs/add/observable/combineLatest";
import "rxjs/add/observable/defer";
import "rxjs/add/observable/dom/ajax";

import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/startWith";

import {IBasicProject, IDetailedProject, IView} from "../Shared/models";

export interface ISettingsState {
  views: IView[] | null;
  projects: IBasicProject[] | null;
  selectedView: IView | null;
  selectedProject: IDetailedProject | null;
}

const allViews: Observable<IView[]> = Observable
  .defer(() => Observable.ajax.getJSON<IView[]>("api/views"))
  .startWith(null);

const allProjects: Observable<IBasicProject[]> = Observable
  .defer(() => Observable.ajax.getJSON<IBasicProject[]>("api/projects"))
  .startWith(null);

const selectedViewsSubject = new Subject<IView>();
export const selectView = (view: IView) => selectedViewsSubject.next(view);
const selectedViews: Observable<IView> = selectedViewsSubject
  .startWith(null);

const selectedProjectsSubject = new Subject<IBasicProject>();
export const selectProject = (project: IBasicProject) => selectedProjectsSubject.next(project);
const selectedProjects: Observable<IDetailedProject> = selectedProjectsSubject
  .switchMap(p => Observable.ajax.getJSON<IDetailedProject>(`api/projects/${p.id}`)).startWith(null);

export const state: Observable<ISettingsState> = Observable.combineLatest(
  allViews, allProjects, selectedViews, selectedProjects,
  (vs, ps, sv, sp) => ({
    views: vs,
    projects: ps,
    selectedView: sv,
    selectedProject: sp
  })
);
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import "rxjs/add/observable/combineLatest";
import "rxjs/add/observable/defer";
import "rxjs/add/observable/dom/ajax";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/startWith";
var allViews = Observable
    .defer(function () { return Observable.ajax.getJSON("api/views"); })
    .startWith(null);
var allProjects = Observable
    .defer(function () { return Observable.ajax.getJSON("api/projects"); })
    .startWith(null);
var selectedViewsSubject = new Subject();
export var selectView = function (view) { return selectedViewsSubject.next(view); };
var selectedViews = selectedViewsSubject
    .startWith(null);
var selectedProjectsSubject = new Subject();
export var selectProject = function (project) { return selectedProjectsSubject.next(project); };
var selectedProjects = selectedProjectsSubject
    .switchMap(function (p) { return Observable.ajax.getJSON("api/projects/" + p.id); }).startWith(null);
export var state = Observable.combineLatest(allViews, allProjects, selectedViews, selectedProjects, function (vs, ps, sv, sp) { return ({
    views: vs,
    projects: ps,
    selectedView: sv,
    selectedProject: sp
}); });
//# sourceMappingURL=settings.core.js.map
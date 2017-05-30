import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import "rxjs/add/observable/dom/ajax";
import "rxjs/add/observable/of";
import "rxjs/add/observable/defer";
import "rxjs/add/observable/combineLatest";
import "rxjs/add/observable/empty";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/merge";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/repeat";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/startWith";

import {IView, IViewData} from "./models";

// fetching the initial set of views

export const allViews: Observable<IView[]> = Observable.defer(() => Observable.ajax.getJSON<IView[]>("api/views"));

// selecting a view

const selectedViewsSubject = new Subject<IView>();
export const selectView = (view: IView) => selectedViewsSubject.next(view);
export const selectedViews: Observable<IView> = selectedViewsSubject;

// fetching the data of a view
export const selectedViewData = selectedViews.switchMap(
  (selectedView: IView) => Observable.of(null)
    .delay(3000)
    .mergeMap(() => Observable.ajax.getJSON<IViewData>(`api/viewdata/${selectedView.id}`)
      .catch(() => Observable.empty<IViewData>()))
    .repeat()
    .merge(Observable.ajax.getJSON<IViewData>(`api/viewdata/${selectedView.id}`)
      .catch(() => Observable.empty<IViewData>()))
);

// combining all of the above in a single state

export interface IDashboardState {
  views: IView[] | null;
  selectedView: IView | null;
  selectedViewData: IViewData | null;
}

export const state = Observable.combineLatest(
  allViews.startWith(null),
  selectedViews.startWith(null),
  selectedViewData.startWith(null),
  (views: IView[], selectedView: IView, viewData: IViewData) => {
    return {
      views: views,
      selectedView: selectedView,
      selectedViewData: viewData
    };
  });
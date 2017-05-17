import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import "rxjs/add/observable/dom/ajax";
import "rxjs/add/observable/defer";
import "rxjs/add/observable/combineLatest";

import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/startWith";

import { IView, IViewData } from "./Models";

// fetching the initial set of views

export const allViews: Observable<IView[]> = Observable.defer(() => Observable.ajax.getJSON<IView[]>("api/views"));

// selecting a view

const selectedViewsSubject = new Subject<IView>();
export const selectView = (view: IView) => selectedViewsSubject.next(view);
export const selectedViews: Observable<IView> = selectedViewsSubject;

// fetching the data of a view

export const getSelectedViewData: (selectedViews: Observable<IView>) => Observable<IViewData> = (selectedViews: Observable<IView>) => selectedViews.switchMap(
  (selectedView: IView) => Observable.ajax.getJSON<IViewData>(`api/viewdata/${selectedView.id}`)
);

export const selectedViewData = getSelectedViewData(selectedViews);

// combining all of the above in a single state

export interface IDashboardState {
  views: IView[] | null;
  selectedView: IView | null;
  selectedViewData: IViewData | null;
}

export const getState: (allViews: Observable<IView[]>, selectedViews: Observable<IView>, selectedViewData: Observable<IViewData>) => Observable<IDashboardState>
  = (allViews, selectedViews, selectedViewData) => Observable.combineLatest(
    allViews.startWith(null), selectedViews.startWith(null), selectedViewData.startWith(null),
    (views: IView[], selectedView: IView, viewData: IViewData) => {
    const s: IDashboardState = {
      views: views,
      selectedView: selectedView,
      selectedViewData: viewData
    };
    return s;
});

export const state = getState(allViews, selectedViews, selectedViewData);


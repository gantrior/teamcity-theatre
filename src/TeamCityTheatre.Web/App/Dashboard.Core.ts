import { Subject, Observable } from "@reactivex/rxjs";
import { IView, IViewData } from "./Models";

// fetching the initial set of views

const views: Observable<IView[]> = Observable.ajax.getJSON<IView[]>("api/views");

export { views };

// selecting a view

const selectedViewsSubject : Subject<IView> = new Subject<IView>();
const selectView = (view: IView) => selectedViewsSubject.next(view);
const selectedViews: Observable<IView> = selectedViewsSubject;

export { selectView, selectedViews }

// fetching the data of a view

const viewData: Observable<IViewData> = selectedViews.switchMap(
  (selectedView: IView) => Observable.ajax.getJSON<IViewData>(`api/viewdata/${selectedView.id}`)
);

export { viewData }

// combining all of the above in a single state

export interface IDashboardState {
  views: IView[] | null;
  selectedView: IView | null;
  latestViewData: IViewData | null;
}

export const state: Observable<IDashboardState> = Observable.combineLatest(
  views.startWith(null),
  selectedViews.startWith(null),
  viewData.startWith(null),
  (views: IView[], selectedView: IView, viewData: IViewData) => {
    const s: IDashboardState = {
      views: views,
      selectedView: selectedView,
      latestViewData: viewData
    };
    return s;
  });

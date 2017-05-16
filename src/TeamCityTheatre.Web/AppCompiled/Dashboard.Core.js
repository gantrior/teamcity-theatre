import { Subject, Observable } from "@reactivex/rxjs";
// fetching the initial set of views
var views = Observable.ajax.getJSON("api/views");
export { views };
// selecting a view
var selectedViewsSubject = new Subject();
var selectView = function (view) { return selectedViewsSubject.next(view); };
var selectedViews = selectedViewsSubject;
export { selectView, selectedViews };
// fetching the data of a view
var viewData = selectedViews.switchMap(function (selectedView) { return Observable.ajax.getJSON("api/viewdata/" + selectedView.id); });
export { viewData };
export var state = Observable.combineLatest(views.startWith(null), selectedViews.startWith(null), viewData.startWith(null), function (views, selectedView, viewData) {
    var s = {
        views: views,
        selectedView: selectedView,
        latestViewData: viewData
    };
    return s;
});
//# sourceMappingURL=Dashboard.Core.js.map
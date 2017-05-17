import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import "rxjs/add/observable/dom/ajax";
import "rxjs/add/observable/of";
import "rxjs/add/observable/defer";
import "rxjs/add/observable/combineLatest";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/merge";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/repeat";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/startWith";
// fetching the initial set of views
export var allViews = Observable.defer(function () { return Observable.ajax.getJSON("api/views"); });
// selecting a view
var selectedViewsSubject = new Subject();
export var selectView = function (view) { return selectedViewsSubject.next(view); };
export var selectedViews = selectedViewsSubject;
// fetching the data of a view
export var getSelectedViewData = function (selectedViews) { return selectedViews.switchMap(function (selectedView) { return Observable.of(null)
    .delay(3000)
    .mergeMap(function () { return Observable.ajax.getJSON("api/viewdata/" + selectedView.id); })
    .repeat()
    .merge(Observable.ajax.getJSON("api/viewdata/" + selectedView.id)); }); };
export var selectedViewData = getSelectedViewData(selectedViews);
export var getState = function (allViews, selectedViews, selectedViewData) { return Observable.combineLatest(allViews.startWith(null), selectedViews.startWith(null), selectedViewData.startWith(null), function (views, selectedView, viewData) {
    var s = {
        views: views,
        selectedView: selectedView,
        selectedViewData: viewData
    };
    return s;
}); };
export var state = getState(allViews, selectedViews, selectedViewData);
//# sourceMappingURL=Dashboard.Core.js.map
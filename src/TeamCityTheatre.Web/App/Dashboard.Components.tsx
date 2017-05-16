import * as React from "react";
import { selectView } from "./Dashboard.Core";
import { IView, IViewData } from "./Models";

export const Dashboard = (props: { views: IView[], selectedView: IView, latestViewData: IViewData }): JSX.Element => {
  if (props.views === null) return null;
  if (props.selectedView === null) return <Views views={props.views} />;
  return null;
};

export const Views = (props: { views: IView[] }) => (
  <div id="views">
    {props.views.map(view => (
      <a className="btn btn-primary view" id={view.id} onClick={() => selectView(view)}>
        { view.name } <span className="badge">{ view.tiles.length } tiles</span>
      </a>))}
  </div>
);
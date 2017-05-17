import { createElement } from "react";
import { selectView } from "./Dashboard.Core";
import { IView, IViewData } from "./Models";

export const Views = (props: { views: IView[] }) => (
  <div id="views">
    {props.views.map(view => (
      <a className="btn btn-primary view" id={view.id} onClick={() => selectView(view)}>
        {view.name} <span className="badge">{view.tiles.length} tiles</span>
      </a>))}
  </div>
);

export const Dashboard = (props: { views: IView[] | null, selectedView: IView | null, selectedViewData: IViewData | null }) => {
  if (props.views === null) return <div></div>;
  if (props.selectedView === null) return <Views views={props.views} />;
  return <div></div>;
};
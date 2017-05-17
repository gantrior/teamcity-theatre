import { createElement } from "react";
import { selectView } from "./Dashboard.Core";
import { IView, IViewData, ITileData, BuildStatus, IDetailedBuild } from "./Models";

/**
 * Root dispatching component
 */
export const Dashboard =
  (props: { views: IView[] | null, selectedView: IView | null, selectedViewData: IViewData | null }) => {
    if (props.views === null)
      return <div>
               <i className="fa fa-spin fa-cog"/> Loading views
             </div>;

    if (props.selectedView === null)
      return <Views views={props.views}/>;

    if (props.selectedViewData === null)
      return <div>
               <i className="fa fa-spin fa-cog"/> Loading view data
             </div>;

    return <View view={props.selectedView} data={props.selectedViewData}/>;
  };

/**
 * List of views to choose from
 */
export const Views = (props: { views: IView[] }) => (
  <div id="views">
    {props.views.map(view => (
      <a className="btn btn-primary view" id={view.id} onClick={() => selectView(view)}>
        {view.name} <span className="badge">{view.tiles.length} tiles</span>
      </a>))}
  </div>
);

/**
 * Details of a single view
 */
export const View = (props: { view: IView, data: IViewData }) => (
  <div id={props.view.id}>
    <div id="tiles">
      <div className="tiles-wrapper">
        {props.data.tiles.map(tile => <Tile view={props.view} data={tile}/>) }
      </div>
    </div>
  </div>
);

/**
 * A single tile of a view
 */
export const Tile = (props: { view: IView, data: ITileData }) => {
  const buildStatus = BuildStatus[props.data.combinedBuildStatus].toLowerCase();
  const height = `height-${props.view.defaultNumberOfBranchesPerTile}`;
  return (
    <div id={props.data.id} className={`tile ${buildStatus} ${height} col-xs-6 col-sm-4 col-md-3 col-lg-2`}>
      <h4 className="tile-title">{props.data.label}</h4>
      <div className="tile-builds">
        { props.data.builds.map(build => <Build build={build} />) }
      </div>
    </div>
  );
}

/**
 * A single build in a tile
 */
export const Build = (props: { build: IDetailedBuild }) => {
  const isFinished = props.build.state === "finished";
  const isRunning = props.build.state === "running";
  const isSuccess = props.build.status === BuildStatus.Success;

  const buildStatus = BuildStatus[props.build.status].toLowerCase();
  const percentageCompleted = isFinished ? 100 : props.build.percentageComplete;
  const progressBarTheme = isSuccess ? "progress-bar-success" : "progress-bar-danger";
  const progressBarAnimation = isRunning ? "progress-bar-striped active" : "";
  return (
    <div id={props.build.id} className={`tile-build ${buildStatus}`}>
      <div className="progress">
        <div className={`progress-bar ${progressBarTheme} ${progressBarAnimation}`} style={{ width: `${percentageCompleted}%` }}>
          <span className="branch">{props.build.branchName}</span>
          { isFinished ? <span className="execution-timestamp">{props.build.startDate}</span> : null }
          { isRunning  ? <span className="remaining">{  }</span> : null }
        </div>
      </div>
    </div>
  );
}
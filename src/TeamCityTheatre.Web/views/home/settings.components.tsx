import {createElement} from "react";
import {IBasicProject, IDetailedProject, ITile, IView} from "../Shared/models";
import {selectView} from "./settings.core";


export const Settings = (props: { views: IView[] | null, selectedView: IView | null, projects: IBasicProject[] | null, selectedProject: IDetailedProject | null }) => {
  return (
    <div id="config">
      <div id="views-section" className="section">
        <div className="col-md-4"><ViewsList views={props.views} selectedView={props.selectedView}/></div>
        <div className="col-md-8"><SelectedViewDetails selectedView={props.selectedView}/></div>
      </div>
      <div id="projects-section" className="section">

      </div>
    </div>
  );
};

export const ViewsList = (props: { views: IView[] | null, selectedView: IView | null }) => {
  if (props.views === null) return (
    <div>
      <i className="fa fa-spin fa-cog"/> Loading views
    </div>
  );
  return (
    <div id="views-wrapper">
      <div className="panel panel-primary">
        <div className="panel-heading"><h2>Views</h2></div>
        <div className="panel-body">
          <div><CreateViewButton /></div>
        </div>
        <ViewsTable views={props.views} selectedView={props.selectedView}/>
      </div>
    </div>
  );
};

export const CreateViewButton = (props: {}) => (
  <button className="add-view-button btn btn-success" onClick={() => {
  }}>
    <i className="fa fa-plus"/> Create a new view
  </button>
);

export const ViewsTable = (props: { views: IView[], selectedView: IView | null }) => {
  return (
    <table id="views-table" className="table table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th/>
      </tr>
      </thead>
      <tbody>{ props.views.map(view => <ViewRow view={view} selectedView={props.selectedView}/>) }</tbody>
    </table>
  );
};

export const ViewRow = (props: { view: IView, selectedView: IView | null }) => {
  const isSelected = props.view === props.selectedView;

  const selectedClassName = isSelected ? "selected" : "";
  return (
    <tr className={`view ${selectedClassName}`}>
      <td className="view-name" onClick={() => selectView(props.view) }>{ props.view.name }</td>
      <td>
        <ConfigureViewButton view={props.view}/>
        <EditViewButton view={props.view}/>
        <DeleteViewButton view={props.view}/>
      </td>
    </tr>
  );
};

export const ConfigureViewButton = (props: { view: IView }) => (
  <button className="configure-view-button btn btn-primary" onClick={() => selectView(props.view) }>
    <i className="fa fa-cogs"/> Configure
  </button>
);

export const EditViewButton = (props: { view: IView }) => (
  <button className="edit-view-button btn btn-default" onClick={() => {
  }} title="Edit">
    <i className="fa fa-pencil"/>
  </button>
);

export const DeleteViewButton = (props: { view: IView }) => (
  <button className="delete-view-button btn btn-danger" onClick={() => {
  }} title="Delete">
    <i className="fa fa-remove"/>
  </button>
);

export const SelectedViewDetails = (props: { selectedView: IView | null }) => {
  if (props.selectedView === null) return <div />;
  return (
    <div id="view-details">
      <div className="panel panel-default">
        <div className="panel-heading"><div className="panel-title"><h2>Tiles of {props.selectedView.name}</h2></div></div>
        <div className="panel-body"/>
        <TilesTable view={props.selectedView} />
      </div>
    </div>
  );
};

export const TilesTable = (props: { view: IView }) => {
  return (
    <table className="table table-striped">
      <thead>
      <tr>
        <th>Label</th>
        <th>Build configuration</th>
        <th/>
      </tr>
      </thead>
      <tbody>
        { props.view.tiles.map(tile => <TileRow view={props.view} tile={tile} /> ) }
      </tbody>
    </table>
  );
};

export const TileRow = (props: { view: IView, tile: ITile }) => {
  return (
    <tr>
      <td>{props.tile.label}</td>
      <td>{props.tile.buildConfigurationDisplayName}</td>
      <td>
        <EditTileButton view={props.view} tile={props.tile} />
        <DeleteTileButton view={props.view} tile={props.tile} />
      </td>
    </tr>
  );
};

export const EditTileButton = (props: { view: IView, tile: ITile }) => (
  <button className="edit-tile-button btn btn-default" onClick={() => {}} title="Edit">
    <i className="fa fa-pencil"/>
  </button>
);

export const DeleteTileButton = (props: { view: IView, tile: ITile }) => (
  <button className="delete-tile-button btn btn-danger" onClick={() => {}}
          title="Delete">
    <i className="fa fa-remove"/>
  </button>
);
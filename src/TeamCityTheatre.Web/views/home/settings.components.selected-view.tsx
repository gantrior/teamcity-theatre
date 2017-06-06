import {createElement} from "react";
import {ITile, IView} from "../shared/contracts";

export const SelectedView = (props: { selectedView: IView | null }) => {
  if (props.selectedView === null) return <div />;
  return (
    <div id="view-details">
      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="panel-title"><h2>Tiles of {props.selectedView.name}</h2></div>
        </div>
        <div className="panel-body"/>
        <TilesTable view={props.selectedView}/>
      </div>
    </div>
  );
};

const TilesTable = (props: { view: IView }) => {
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
      { props.view.tiles.map(tile => <TileRow view={props.view} tile={tile}/>) }
      </tbody>
    </table>
  );
};

const TileRow = (props: { view: IView, tile: ITile }) => {
  return (
    <tr>
      <td>{props.tile.label}</td>
      <td>{props.tile.buildConfigurationDisplayName}</td>
      <td>
        <EditTileButton view={props.view} tile={props.tile}/>
        <DeleteTileButton view={props.view} tile={props.tile}/>
      </td>
    </tr>
  );
};

const EditTileButton = (props: { view: IView, tile: ITile }) => (
  <button className="edit-tile-button btn btn-default" onClick={() => {
  }} title="Edit">
    <i className="fa fa-pencil"/>
  </button>
);

const DeleteTileButton = (props: { view: IView, tile: ITile }) => (
  <button className="delete-tile-button btn btn-danger" onClick={() => {
  }}
          title="Delete">
    <i className="fa fa-remove"/>
  </button>
);
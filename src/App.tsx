import { useState } from "react";
import Map, {
  Source,
  Layer,
  ViewStateChangeEvent,
} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

import trainData from "./geojson/trains.geojson?raw";
import { useParams, useNavigate } from "react-router-dom";


interface Params {
  latitude?: number; 
  longitude?: number;
  zoom?: number;
}

function App(): JSX.Element {
  /**
   * @name params
   * @description URL parameters
   * @param {number} longitude - The longitude of the map.
   * @param {number} latitude - The latitude of the map.
   * @param {number} zoom - The zoom level of the map.
   */
  const params: Params = useParams();
  const navigate = useNavigate();

  /**
   * @name data
   * @description GeoJSON data of the trains
   */
  const [data] = useState(JSON.parse(trainData));

  /**
   * @name viewState
   * @description Current state of the map
   * @param {number} longitude - The longitude of the map.
   * @param {number} latitude - The latitude of the map.
   * @param {number} zoom - The zoom level of the map.
   *
   * @name setViewState
   * @description Function to update the viewState
   * @param {object} newViewState - The new viewState object with latitude, longitude and zoom.
   */
  const [viewState, setViewState] = useState({
    longitude: params.longitude || 4.3951,
    latitude: params.latitude || 46.001,
    zoom: params.zoom || 5,
  });

  /**
   * @name mapMove
   * @description Update the viewState and the URL when the map is moved
   * @param {object} e - The event object containing the new viewState
   */
  function mapMove(e: ViewStateChangeEvent) {
    setViewState(e.viewState);
    navigate(
      `/${e.viewState.latitude.toFixed(5)}/${e.viewState.longitude.toFixed(
        5
      )}/${e.viewState.zoom.toFixed(2)}`,
      { replace: true }
    );
  }

  return (
    <main className="flex min-h-screen min-w-full">
      <Map
        {...viewState}
        onMove={(e) => mapMove(e)}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="https://api.maptiler.com/maps/cfe038db-726a-41cf-a26a-d7d81ffd705f/style.json?key=8MvyZNMeS4PmyUunVjbY"
      >
        <Source id="trains" type="geojson" data={data}>
          <Layer
            id="trains"
            type="line"
            paint={{
              "line-color": "#378434",
              "line-width": 3,
            }}
          />
        </Source>
      </Map>
    </main>
  );
}

export default App;

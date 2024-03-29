import React, { useState, useEffect } from "react";
import Map, {
  Source,
  Layer,
  ViewStateChangeEvent,
} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

import trainData from "./geojson/trains.geojson?raw";

function App(): JSX.Element {
  const [data, setData] = useState(JSON.parse(trainData));
  const [viewState, setViewState] = useState({
    longitude: 4.3951,
    latitude: 46.001,
    zoom: 5,
  });

  function mapMove(e: ViewStateChangeEvent) {
    setViewState(e.viewState);
    // router.push(`/${e.viewState.longitude}/${e.viewState.latitude}/${e.viewState.zoom}`);
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

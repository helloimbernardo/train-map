"use client";

import React, { useEffect, useState } from "react";
import Map, { Source, Layer } from "react-map-gl/maplibre";
import 'maplibre-gl/dist/maplibre-gl.css';



export default function Home() : React.JSX.Element {
  const [data, setData] = useState('');

  useEffect(() => {
    setData(require("../geojson/trains.geojson"));
  }, []);

  // @ts-ignore
    return (
    <main className="flex min-h-screen min-w-full">
      <Map
        initialViewState={{
          longitude: 4.3951,
          latitude: 46.001,
          zoom: 5,
        }}
        mapStyle="https://api.maptiler.com/maps/cfe038db-726a-41cf-a26a-d7d81ffd705f/style.json?key=8MvyZNMeS4PmyUunVjbY"
        style={{ width: "100vw", height: "100vh" }}
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

"use client";

import React, { useEffect, useState } from "react";
import Map, { Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Home() : React.JSX.Element {
  const [data, setData] = useState('');

  useEffect(() => {
    setData(require("../geojson/trains.geojson"));
  }, []);

  // @ts-ignore
    return (
    <main className="flex min-h-screen min-w-full">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude: 4.3951,
          latitude: 46.001,
          zoom: 5,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/helloimbernardo/cloixjnym002901nz8xs172lb"
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

"use client";

import { useEffect, useState } from "react";

const ROUTES = [
  { from: "GRU", to: "GIG" },
  { from: "GRU", to: "CNF" },
  { from: "GRU", to: "CWB" },
  { from: "GRU", to: "POA" },
  { from: "GRU", to: "BSB" },
  { from: "GRU", to: "SSA" },
  { from: "GRU", to: "REC" },
  { from: "GRU", to: "FOR" },
  { from: "GRU", to: "MAO" },
];

export function FiliaisFlightMap() {
  const [Mod, setMod] = useState<null | typeof import("./flightcn-flight-routes")>(null);

  useEffect(() => {
    let alive = true;
    import("./flightcn-flight-routes").then((m) => {
      if (alive) setMod(m);
    });
    return () => {
      alive = false;
    };
  }, []);

  if (!Mod) {
    return (
      <div className="aspect-[4/5] w-full animate-pulse rounded-2xl bg-primary/5" />
    );
  }

  const { Map, FlightRoutes } = Mod;

  return (
    <div className="h-[460px] w-full overflow-hidden rounded-2xl border border-primary/15 bg-background shadow-elegant md:h-[560px]">
      <Map center={[-52, -14]} zoom={3.1}>
        <FlightRoutes
          routes={ROUTES}
          showAirports
          showLabel
          hoverEffect
          tripType="one-way"
          lineStyle="dashed"
          animate={{ duration: 6000 }}
        />
      </Map>
    </div>
  );
}
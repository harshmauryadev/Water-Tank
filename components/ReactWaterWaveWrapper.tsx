"use client";

import React from "react";
// @ts-ignore
import WaterWave from "react-water-wave";

interface ReactWaterWaveWrapperProps {
  children: React.ReactNode;
  imageUrl?: string;
  dropRadius?: number;
  perturbance?: number;
  resolution?: number;
}

export default function ReactWaterWaveWrapper({
  children,
  imageUrl = "/images/exact-hero-bg.png",
  dropRadius = 20,
  perturbance = 0.03,
  resolution = 512,
}: ReactWaterWaveWrapperProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <WaterWave
        imageUrl={imageUrl}
        dropRadius={dropRadius}
        perturbance={perturbance}
        resolution={resolution}
        style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
      >
        {(methods: any) => (
          <div className="relative z-10 w-full min-h-full">
            {children}
          </div>
        )}
      </WaterWave>
    </div>
  );
}

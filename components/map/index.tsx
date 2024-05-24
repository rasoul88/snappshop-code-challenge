"use client";
import React from "react";
import styles from "./index.module.css";
import SearchInput from "./search-input";
import { useMapStore } from "@/store/map-store";
import MapCanvas from "./map-canvas";
import ZoomController from "./zoom-controller";
import AddressPrinter from "./address-printer";

function SnappshopMap() {
  const isMapFullyLoaded = useMapStore((state) => state.isMapFullyLoaded);

  return (
    <>
      <div className={styles.mapContainer}>
        <MapCanvas />
        {isMapFullyLoaded && (
          <>
            <SearchInput />
            <ZoomController />
          </>
        )}
      </div>
      <AddressPrinter />
    </>
  );
}

export default SnappshopMap;

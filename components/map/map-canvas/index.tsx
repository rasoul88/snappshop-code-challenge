import React, { useCallback } from "react";
import Map, { Marker, ViewStateChangeEvent } from "react-map-gl/maplibre";
import MapPoiner from "../pointer";
import urls from "@/utils/constants/urls";
import { useMapStore } from "@/store/map-store";
import "maplibre-gl/dist/maplibre-gl.css";

function MapCanvas() {
  const {
    viewState,
    setViewState,
    setIsMapFullyLoaded,
    isPointerMoving,
    setIsPointerMoving,
    setLonLatToSearchAddress,
  } = useMapStore();

  const onMoveEnd = useCallback((evt: ViewStateChangeEvent) => {
    setIsPointerMoving(false);
    setLonLatToSearchAddress(evt.viewState);
  }, []);

  const onClickOnSpecificLocation = useCallback((viewState: IViewState) => {
    setViewState(viewState);
    setLonLatToSearchAddress(viewState);
  }, []);

  return (
    <Map
      {...viewState}
      onMoveStart={() => {
        setIsPointerMoving(true);
      }}
      onMoveEnd={onMoveEnd}
      onMove={(evt) => {
        setViewState(evt.viewState);
      }}
      style={{ width: 600, height: 800 }}
      mapStyle={urls.SNAPPMAP_TILE_SERVER}
      onLoad={setIsMapFullyLoaded}
      onClick={(e) =>
        onClickOnSpecificLocation({
          zoom: viewState.zoom,
          latitude: e.lngLat.lat,
          longitude: e.lngLat.lng,
        })
      }
    >
      <Marker longitude={viewState.longitude} latitude={viewState.latitude}>
        <MapPoiner isMoving={isPointerMoving} />
      </Marker>
    </Map>
  );
}

export default MapCanvas;

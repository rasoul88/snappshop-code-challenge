import { create } from "zustand";

export const useMapStore = create<IMapStore>((set) => ({
  viewState: {
    longitude: 51.382758909463746,
    latitude: 35.732290355252545,
    zoom: 13,
  },
  setViewState: (viewState) => set({ viewState: viewState }),
  changeViewState: (stateData) =>
    set((state) => ({ viewState: { ...state.viewState, ...stateData } })),
  zoomIn: () =>
    set((state) => ({
      viewState: { ...state.viewState, zoom: state.viewState.zoom + 1 },
    })),
  zoomOut: () =>
    set((state) => ({
      viewState: { ...state.viewState, zoom: state.viewState.zoom - 1 },
    })),
  isMapFullyLoaded: false,
  setIsMapFullyLoaded: () => set({ isMapFullyLoaded: true }),
  isPointerMoving: false,
  setIsPointerMoving: (isMoving) => set({ isPointerMoving: isMoving }),
  lonLatToSearchAddress: null,
  setLonLatToSearchAddress: (location) =>
    set({ lonLatToSearchAddress: location }),
  searchInputValue: "",
  setSearchInputValue: (value) => set({ searchInputValue: value }),
  isShowSearchInputLabel: true,
  setIsShowSearchInputLabel: (isShow) =>
    set({ isShowSearchInputLabel: isShow }),
}));

interface ILocation {
  latitude: number;
  longitude: number;
}

interface IViewState {
  longitude: number;
  latitude: number;
  zoom: number;
}

interface IMapPointer {
  isMoving: boolean;
}

interface ISearchInput {
  onSearchedLoacationFound: (location: ILocation) => void;
}

interface IMapStore {
  viewState: IViewState;
  isMapFullyLoaded: boolean;
  isPointerMoving: boolean;
  setViewState: (viewState: IViewState) => void;
  changeViewState: (stateData: Partial<IViewState>) => void;
  setIsMapFullyLoaded: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  setIsPointerMoving: (isMoving: boolean) => void;
  lonLatToSearchAddress: ILocation | null;
  setLonLatToSearchAddress: (location: ILocation) => void;
  searchInputValue: string;
  setSearchInputValue: (value: string) => void;
  isShowSearchInputLabel: boolean;
  setIsShowSearchInputLabel: (isMoving: boolean) => void;
}

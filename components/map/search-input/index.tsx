import Image from "next/image";
import styles from "./index.module.css";
import SearchIcon from "@/assets/icons/search.svg";
import RemoveIcon from "@/assets/icons/remove.svg";
import LoadingIcon from "@/assets/icons/loading.svg";
import React, { useRef } from "react";
import useDebounce from "@/utils/custom-hooks/use-debounce";
import { useFetch } from "@/utils/custom-hooks/use-fetch";
import urls from "@/utils/constants/urls";
import strings from "@/utils/constants/strings";
import { useMapStore } from "@/store/map-store";
import { useShallow } from "zustand/react/shallow";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const {
    searchInputValue,
    changeViewState,
    setSearchInputValue,
    isShowSearchInputLabel,
    setIsShowSearchInputLabel,
    setLonLatToSearchAddress,
  } = useMapStore(
    useShallow((state) => ({
      searchInputValue: state.searchInputValue,
      changeViewState: state.changeViewState,
      setSearchInputValue: state.setSearchInputValue,
      isShowSearchInputLabel: state.isShowSearchInputLabel,
      setIsShowSearchInputLabel: state.setIsShowSearchInputLabel,
      setLonLatToSearchAddress: state.setLonLatToSearchAddress,
    }))
  );

  const searchString = useDebounce(searchInputValue, 500);

  const url = searchString
    ? `${urls.SNAPP_AUTOCOMPLETE_BASE_URL}&query=${searchString}`
    : "";
  const { isLoading, error, data } = useFetch(url);

  React.useEffect(() => {
    if (data?.data?.length > 0) {
      const location = data?.data?.[0]?.location;
      changeViewState({ ...location });
      setLonLatToSearchAddress(location);
    }
  }, [data]);

  return (
    <div
      className={styles.inputContainer}
      onClick={() => {
        if (ref.current) ref.current.focus();
      }}
    >
      <Image
        src={SearchIcon}
        className={styles.search}
        alt="search"
        width={24}
      />
      <label hidden={!isShowSearchInputLabel}>
        {strings.SEARCH_IN} <span>{strings.TEHRAN}</span>
      </label>
      <input
        ref={ref}
        type="text"
        autoComplete="off"
        value={searchInputValue}
        onChange={(e) => setSearchInputValue(e.target.value)}
        onFocus={() => {
          setIsShowSearchInputLabel(false);
        }}
        onBlur={(e) => {
          if (!e.target.value) {
            setIsShowSearchInputLabel(true);
          }
        }}
      />
      {searchInputValue && !isLoading && (
        <button
          onClick={() => {
            setSearchInputValue("");
          }}
        >
          <Image src={RemoveIcon} alt="search" width={16} />
        </button>
      )}
      {isLoading && (
        <Image src={LoadingIcon} className={styles.loading} alt="loading" />
      )}
    </div>
  );
};

export default SearchInput;

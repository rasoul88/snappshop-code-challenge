import styles from "./index.module.css";
import React, { useMemo } from "react";
import { useMapStore } from "@/store/map-store";
import urls from "@/utils/constants/urls";
import { useFetch } from "@/utils/custom-hooks/use-fetch";
import strings from "@/utils/constants/strings";

const AddressPrinter = () => {
  const lonLatToSearchAddress = useMapStore(
    (state) => state.lonLatToSearchAddress
  );

  const url = useMemo(
    () =>
      lonLatToSearchAddress?.latitude && lonLatToSearchAddress.longitude
        ? `${urls.SNAPP_LOCATION_TO_ADDRESS_BASE_URL}&lat=${lonLatToSearchAddress?.latitude}&lon=${lonLatToSearchAddress.longitude}`
        : "",
    [lonLatToSearchAddress]
  );

  const { isLoading, error, data } = useFetch(url);
  return (
    <p className={styles.address}>
      {isLoading ? strings.RECEIVING_DATA : data?.data?.address}
    </p>
  );
};

export default AddressPrinter;

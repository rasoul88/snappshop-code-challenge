import styles from "./index.module.css";
import React from "react";
import PlusIcon from "@/assets/icons/plus.svg";
import MinusIcon from "@/assets/icons/minus.svg";
import Image from "next/image";
import { useMapStore } from "@/store/map-store";

const ZoomController = () => {
  const zoomIn = useMapStore((state) => state.zoomIn);
  const zoomOut = useMapStore((state) => state.zoomOut);

  return (
    <div className={styles.zoomBtnsContainer}>
      <button onClick={zoomIn}>
        <Image src={PlusIcon} alt="+" width={21} />
      </button>
      <hr />
      <button onClick={zoomOut}>
        <Image src={MinusIcon} alt="-" width={21} />
      </button>
    </div>
  );
};

export default ZoomController;

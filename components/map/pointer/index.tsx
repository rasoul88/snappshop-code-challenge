import styles from "./index.module.css";

const MapPoiner = ({ isMoving }: IMapPointer) => {
  return (
    <div className={styles.poinerContainer}>
      <div className={styles.head}>
        <span />
      </div>
      <div className={styles.bar} />
      <div
        className={styles.shadow}
        style={{ marginTop: isMoving ? "0.1rem" : "-0.3rem" }}
      />
    </div>
  );
};

export default MapPoiner;

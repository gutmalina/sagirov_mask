import styles from "./Line.module.css";

const Line = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.line_secondary}></div>
      <div className={styles.group}>
        <div className={styles.line_primary}></div>
        <div className={styles.round}></div>
      </div>
    </section>
  );
};

export default Line;

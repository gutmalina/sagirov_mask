import styles from "./ButtonSimple.module.css";

const ButtonSimple = ({ title, onClick }) => {
  return (
    <>
      <div className={styles.border}>
        <div className={styles.border_dublicate}>
          <div className={styles.corner}>
            <button className={styles.btn} onClick={onClick}>
              {title}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonSimple;

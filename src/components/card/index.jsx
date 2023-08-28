import { useEffect, useRef, useState } from "react";
import styles from "./card.module.css";

const Card = ({ card }) => {
  const [shadow, setShadow] = useState(`${styles.card_shadow}`);
  const [wrapper, setWrapper] = useState(`${styles.wrapper}`);
  const cardRef = useRef();
  const shadowRef = useRef();

  /** движение тени по карточкам вслед за мышкой */
  useEffect(() => {
    const element = cardRef.current;
    const mousePosInCard = {};
    element.addEventListener("mousemove", (e) => {
      mousePosInCard.x = e.offsetX + "px";
      mousePosInCard.y = e.offsetY + "px";
      setShadow(`${styles.card_shadow} ${styles.card_shadow_active}`);
      shadowRef.current.style.left = mousePosInCard.x;
      shadowRef.current.style.top = mousePosInCard.y;
      setWrapper(`${styles.wrapper} ${styles.wrapper_border}`);
    });
    element.addEventListener("mouseleave", (e) => {
      setShadow(`${styles.card_shadow}`);
      setWrapper(`${styles.wrapper}`);
    });

    return () => {
      element.removeEventListener("mousemove", (e) => {});
      element.removeEventListener("mouseleave", (e) => {});
    };
  }, []);

  return (
    <article className={wrapper} ref={cardRef}>
      <p className={styles.subtitle}>{card.subtitle_first}</p>
      <div className={styles.group_text}>
        <h2 className={styles.title}>{card.title}</h2>
        {card.span ? <span>{card.span}</span> : null}
      </div>
      <p className={styles.subtitle}>{card.subtitle_second}</p>
      <div className={shadow} ref={shadowRef}></div>
    </article>
  );
};

export default Card;

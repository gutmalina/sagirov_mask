import ButtonSimple from "../button-simple";
import Card from "../card";
import Line from "../line";
import styles from "./main.module.css";
import {
  BTN_START,
  TEXT_TRAVEL,
  TEXT_WHERE,
  CARDS,
} from "../../utils/constants";
import { useEffect, useState } from "react";

const Main = ({ isShowMenu }) => {
  const [title, setTitle] = useState("");

  const handleClick = () => {};

  useEffect(() => {
    setTitle(TEXT_TRAVEL.toUpperCase());
  }, []);

  return (
    <section className={styles.wrapper}>
      <article className={styles.container}>
        <section className={styles.group_text}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{TEXT_WHERE}</p>
        </section>
        {!isShowMenu ? (
          <ButtonSimple title={BTN_START} onClick={handleClick} />
        ) : null}
      </article>
      {!isShowMenu ? (
        <article className={styles.group_cards}>
          {CARDS.length
            ? CARDS.map((item) => <Card key={item.id} card={item} />)
            : null}
        </article>
      ) : null}
      <Line />
    </section>
  );
};

export default Main;

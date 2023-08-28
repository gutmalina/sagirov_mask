import LinkSimple from "../link-simple";
import { MENU_LINKS } from "../../utils/constants";
import styles from "./menu.module.css";
import { useEffect, useState } from "react";

const Menu = ({ isShowMenu }) => {
  const [classList, setClassList] = useState(`${styles.list}`);

  useEffect(() => {
    isShowMenu
      ? setClassList(`${styles.list} ${styles.list_show}`)
      : setClassList(`${styles.list}`);
  }, [isShowMenu]);

  return (
    <>
      <ul className={classList}>
        {MENU_LINKS.length
          ? MENU_LINKS.map((item) => (
              <li key={item.id} className={styles.li}>
                <LinkSimple title={item.title} to={item.to} />
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default Menu;

import IconMenu from "../../images/icon-menu";
import Logotip from "../../images/logotip";
import Menu from "../menu";
import styles from "./header.module.css";

const Header = ({ isShowMenu, setIsShowMenu }) => {
  const handleClick = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container_logo}>
        <div className={styles.container_logo_dublicate}>
          <Logotip />
        </div>
      </div>
      <IconMenu onClick={handleClick} />
      <Menu isShowMenu={isShowMenu} />
    </section>
  );
};

export default Header;

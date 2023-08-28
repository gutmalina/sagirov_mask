import { useState } from "react";
import styles from "./App.module.css";
import Header from "../header";
import Main from "../main";
import Background from "../../images/background";
import Planet from "../../images/planet";

const App = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <>
      <Header isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
      <div className={styles.border}></div>
      <Main isShowMenu={isShowMenu} />
      <Background />
      <Planet />
    </>
  );
};

export default App;

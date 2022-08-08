import React, { FC, useEffect } from "react";
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import Footer from "../footer/footer";
import s from "./app.module.scss";
import { getFoundInitialNews } from "../../services/actions/news";

import { useDispatch } from "react-redux";
const App: FC = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFoundInitialNews() as any);
  }, [dispatch]);

  return (
    <div className={s.app}>
      <AppHeader />
      <Main />
      <Footer />
    </div>
  );
};

export default App;

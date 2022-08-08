import React, { FC } from "react";
import s from "./app-header.module.scss";
import logo from "../../images/logo.png";
import { SearchIcon } from "../assets/icons/searchIcon";
import { useDispatch } from "react-redux";
import { getFoundNewsByKeyWord } from "../../services/actions/news";

const AppHeader: FC = () => {
  const dispatch = useDispatch();
  const [searchButton, setSearchButton] = React.useState(false);
  const [keyword, setKeyword] = React.useState("");

  function handleSubmitKeyword(keyword: string) {
    dispatch(getFoundNewsByKeyWord(keyword) as any);
  }

  function handleChangeKeyword(e: {
    target: { value: React.SetStateAction<string> };
  }) {
    setKeyword(e.target.value);
  }

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    handleSubmitKeyword(keyword);
  }
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <img src={logo} className={s.header__logo} alt="логотип"></img>
        <div className={s.header__infoCont}>
          <nav className={s.header__nav}>
            <ul className={s.header__menu}>
              <li className={s.header__menuItem}>Главная</li>
              <li className={s.header__menuItem}>Афиша</li>
              <li className={s.header__menuItem}>О компании</li>
              <li className={s.header__menuItem}>Контакты</li>
            </ul>
          </nav>
          <div className={s.header__buttons}>
            {!searchButton ? (
              <button
                className={s.header__buttonSearch}
                onClick={() => setSearchButton(true)}
              >
                <SearchIcon />
              </button>
            ) : (
              <form
                className={s.header__searchFormCont}
                onSubmit={handleSubmit}
              >
                <input
                  className={s.header__searchInput}
                  placeholder="Поиск..."
                  value={keyword || ""}
                  onChange={handleChangeKeyword}
                  required
                  name="search-text"
                />
              </form>
            )}
            {searchButton && (
              <button
                className={s.header__searchButtonClose}
                onClick={() => setSearchButton(false)}
              />
            )}
            <button className={s.header__buttonLogin}>Войти</button>
            <button className={s.header__buttonRegister}>Регистрация</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;

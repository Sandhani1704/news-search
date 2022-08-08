import React, { FC } from "react";
import s from "./main.module.scss";
import moment from "moment";
import NewsCard from "../news-card/news-card";
import { TArticle } from "../../utils/types";
import { LoadIcon } from "../assets/icons/load-icon";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/types";

const Main: FC = () => {
  const [newArticles, setNewArticles] = React.useState<Array<TArticle>>([]);
  const [showButton, setShowButton] = React.useState(false);
  const { articles, newsRequest } = useSelector(
    (state: RootState) => state.news
  );

  React.useEffect(() => {
    if (articles?.length === 0) return;
    setNewArticles(articles?.slice(1, 4));
  }, [articles]);

  React.useEffect(() => {
    setNewArticles(articles?.slice(1, 4));
    if (articles.length <= 3) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [articles]);

  function handleShowButtonClick() {
    setNewArticles(articles?.slice(1, newArticles?.length + 4));
    if (newArticles.length >= articles.length - 4) {
      setShowButton(false);
    }
  }

  return (
    <main className={s.main}>
      <div className={s.main__card}>
        <div className={s.main__cardTextContent}>
          <h2 className={s.main__cardTitle}>
            {articles?.length !== 0 && articles[0]?.title}
          </h2>
          <p className={s.main__cardText}>{articles[0]?.description}</p>
          <div className={s.main__cardFooter}>
            <p className={s.main__cardAuthor}>
              Автор
              <br />
              {moment.utc(articles[0]?.publishedAt).format("DD.MM.YYYY")}
            </p>
            <a
              className={s.main__cardLink}
              href={articles[0]?.url}
              target="blank"
            >
              Подробнее
            </a>
          </div>
        </div>
        <img
          className={s.main__cardPicture}
          src={articles[0]?.urlToImage}
          alt="MainNewsPic"
        />
      </div>
      <div className={s.main__cardsContainer}>
        {newArticles?.map((item: TArticle, key) => (
          <NewsCard item={item} key={key} />
        ))}
      </div>
      {showButton && (
        <button
          className={s.main__showMoreButton}
          onClick={handleShowButtonClick}
        >
          {!newsRequest ? "Загрузить еще" : <LoadIcon />}
        </button>
      )}
    </main>
  );
};

export default Main;

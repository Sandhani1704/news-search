import React, { FC } from "react";
import s from "./news-card.module.scss";
import { TArticle } from "../../utils/types";
import moment from "moment";

type TNewsCardProps = {
    item: TArticle;
};

const NewsCard: FC<TNewsCardProps> = ({item}) => {
  return (
    <div className={s.card}>
      <img className={s.card__cardPicture} src={item?.urlToImage} alt="newsPic" />

      <div className={s.card__textContent}>
        <h2 className={s.card__title}>
        {item?.title}
        </h2>
        <p className={s.card__text}>
          {item?.description}
        </p>
        <div className={s.card__footer}>
          <p className={s.card__author}>
            Автор
            <br />
            {moment.utc(item?.publishedAt).format("DD.MM.YYYY")}
          </p>
          <a className={s.card__link} href={item?.url} target="blank">Подробнее</a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

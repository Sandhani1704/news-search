import { getNewsByKeyWord, getInitialNews } from '../../utils/api';
import { AppDispatch } from '../../utils/types';
import { TArticle } from '../../utils/types';
export const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST';
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
export const GET_NEWS_FAILED = 'GET_NEWS_FAILED';

type TGetNewsSuccesAction = {
    type: typeof GET_NEWS_SUCCESS;
    articles: Array<TArticle>;
}

type TGetNewsRequestAction = {
    type: typeof GET_NEWS_REQUEST;
}

type TGetNewsFailedAction = {
    type: typeof GET_NEWS_FAILED;
}

export type TNewsActions =
    TGetNewsSuccesAction |
    TGetNewsRequestAction |
    TGetNewsFailedAction 
    
export const getFoundNewsByKeyWord = (keyword: string) => (dispatch: AppDispatch) => {
    dispatch({ type: GET_NEWS_REQUEST });
    getNewsByKeyWord(keyword)
        .then((res) => {
            if (res) {
                dispatch({ type: GET_NEWS_SUCCESS, articles: res.articles })
                return;
            }
            return Promise.reject(res);
        })
        .catch((err) =>
            dispatch({
                type: GET_NEWS_FAILED,
                message: `Ошибка получения данных: ${err.message}`,
            })
        );
};

export const getFoundInitialNews = () => (dispatch: AppDispatch) => {
    dispatch({ type: GET_NEWS_REQUEST });
    getInitialNews()
        .then((res) => {
            if (res) {
                dispatch({ type: GET_NEWS_SUCCESS, articles: res.articles })
                return;
            }
            return Promise.reject(res);
        })
        .catch((err) =>
            dispatch({
                type: GET_NEWS_FAILED,
                message: `Ошибка получения данных: ${err.message}`,
            })
        );
};


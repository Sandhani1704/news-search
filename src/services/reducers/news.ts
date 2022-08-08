import {
    GET_NEWS_FAILED,
    GET_NEWS_REQUEST,
    GET_NEWS_SUCCESS,
    TNewsActions
} from "../actions/news";
import { TArticle } from '../../utils/types';

export type TNewsState = {
    articles: Array<TArticle>;
    newsRequest: boolean;
    loadMoreNewsRequest: boolean;
    newsFailed: boolean;
}

export const initialState: TNewsState = {
    articles: [],
    newsRequest: false,
    loadMoreNewsRequest: false,
    newsFailed: false,
};

export const newsReducer = (state = initialState, action: TNewsActions): TNewsState => {
    switch (action.type) {
        case GET_NEWS_REQUEST: {
            return {
                ...state,
                newsRequest: true,
            };
        }
        case GET_NEWS_SUCCESS: {
            return {
                ...state,
                newsFailed: false,
                articles: action.articles,
                newsRequest: false,
            };
        }
        case GET_NEWS_FAILED: {
            return { ...state, newsFailed: true, newsRequest: false };
        }
        default: {
            return state;
        }
    }
};
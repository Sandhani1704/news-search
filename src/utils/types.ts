import { store } from '../index';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { TNewsActions } from '../services/actions/news';
export type TArticle = {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: { id: null, name: string };
    title: string;
    url: string;
    urlToImage: string;
}
export type TApplicationActions = TNewsActions
export type AppThunk<ReturnType = void> = ActionCreator<
    ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

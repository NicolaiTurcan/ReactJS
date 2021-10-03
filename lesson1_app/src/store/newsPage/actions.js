import { PUBLIC_URL } from "../../constants";

export const GET_ARTICLES_PENDING = 'NEWS_PAGE::GET_ARTICLES_PENDING';
export const GET_ARTICLES_SUCCESS = 'NEWS_PAGE::GET_ARTICLES_SUCCESS';
export const GET_ARTICLES_FAILURE = 'NEWS_PAGE::GET_ARTICLES_FAILURE';

const getArticlesPending = () => ({
    type: GET_ARTICLES_PENDING,
});

const getArticlesSuccess = (articles) => ({
    type: GET_ARTICLES_SUCCESS,
    payload: articles,
});

const getArticlesFailure = (error) => ({
    type: GET_ARTICLES_FAILURE,
    payload: error,
});

export const getArticles = () => (dispatch) => {
    dispatch(getArticlesPending());

    fetch(PUBLIC_URL).then((response) => {
        if (!response.ok) {
            throw new Error(`error ${response.status}`);
        }
        return response.json();
    }).then((result) => {
        dispatch(getArticlesSuccess(result));
    }).catch((e) => {
        console.log('e');
        dispatch(getArticlesFailure(e.message));
    });
}
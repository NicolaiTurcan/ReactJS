import { REQEST_STATUS } from "../../constants";

export const selectorArticlesLoading = (state) =>
    state.articles.request.status === REQEST_STATUS.PENDING;
export const selectorArticlesError = (state) => state.articles.request.error;
export const selectorArticles = (state) => state.articles.list;

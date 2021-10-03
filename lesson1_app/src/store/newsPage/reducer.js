import { REQEST_STATUS } from "../../constants";
import { GET_ARTICLES_FAILURE, GET_ARTICLES_PENDING, GET_ARTICLES_SUCCESS } from "./actions";

const initialState = {
    list: [],
    request: {
        error: null,
        status: REQEST_STATUS.IDLE,
    },
};

export const newsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ARTICLES_PENDING: {
            return {
                ...state,
                request: {
                    error: null,
                    status: REQEST_STATUS.PENDING,
                }
            };
        }
        case GET_ARTICLES_SUCCESS: {
            return {
                ...state,
                request: {
                    ...state.request,
                    status: REQEST_STATUS.SUCCESS,
                },
                list: payload,
            };
        }
        case GET_ARTICLES_FAILURE: {
            return {
                ...state,
                request: {
                    error: payload,
                    status: REQEST_STATUS.FAILURE,
                },
            };
        }
        default:
            return state;
    }
};
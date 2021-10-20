import { SET_MESSAGES } from './actions';

const itialState = {
    messages: {}
};

export const chatsMessReducer = (state = itialState, { type, payload }) => {
    switch (type) {
        case SET_MESSAGES: {
            return {
                ...state,
                messages: payload,
            };
        }
        default:
            return state;
    }
};
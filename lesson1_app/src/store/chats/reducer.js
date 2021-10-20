import { SET_CHATS } from './actions';

const itialState = {
    chats: []
};

export const chatsReducer = (state = itialState, { type, payload }) => {
    switch (type) {
        case SET_CHATS: {
            return {
                ...state,
                chats: payload,
            };
        }
        default:
            return state;
    }
};
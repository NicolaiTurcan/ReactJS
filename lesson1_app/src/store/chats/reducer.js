import { ADD_CHAT, DELETE_CHAT } from './actions';

const itialState = {
    chats: [
        { id: 1, name: "Vovan" },
        { id: 2, name: "Kolian" },
        { id: 3, name: "Zinaida Ivanovna" },
        { id: 4, name: "Andron" }
    ],
};

export const chatsReducer = (state = itialState, { type, payload }) => {
    switch (type) {
        case ADD_CHAT: {
            return {
                ...state,
                chats: [...state.chats, { id: payload.newId, name: payload.name }],
            }
        }
        case DELETE_CHAT: {
            const deleteChats = state.chats.filter(({ id }) => id !== payload);
            return {
                ...state,
                chats: deleteChats,
            };
        }
        default:
            return state;
    }
};
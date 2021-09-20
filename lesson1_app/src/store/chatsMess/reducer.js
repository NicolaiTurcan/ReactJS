import { ADD_MESSAGE, DELETE_MESSAGE, ADD_CHATMES, DELETE_CHATMES } from './actions';

const itialState = {
    messages: { 1: [], 2: [], 3: [], 4: [] }
};

export const chatsMessReducer = (state = itialState, { type, payload }) => {
    switch (type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [payload.chatId]: [
                        ...state.messages[payload.chatId],
                        {
                            id: Date.now(),
                            text: payload.text,
                            author: payload.author
                        },
                    ],
                },
            };
        }
        case DELETE_MESSAGE: {
            const deleteMessages = state.messages;
            const newMessages = deleteMessages[payload.chatId].filter((item) => {
                return (item.id !== payload.Id)
            })
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [payload.chatId]: newMessages,
                }
            };
        }
        case ADD_CHATMES: {
            return {
                ...state,
                messages: { ...state.messages, [payload]: [] },
            }
        }
        case DELETE_CHATMES: {
            const deleteChats = state.messages;
            delete deleteChats[payload];
            return {
                ...state,
                messages: deleteChats,
            };
        }
        default:
            return state;
    }
};
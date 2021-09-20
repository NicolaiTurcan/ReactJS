export const ADD_MESSAGE = "MESSAGE::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGE::DELETE_MESSAGE";
export const ADD_CHATMES = "MESSAGE::ADD_CHATMES";
export const DELETE_CHATMES = "MESSAGE::DELETE_CHATMES";

export const addMessage = (chatId, text, author) => ({
    type: ADD_MESSAGE,
    payload: { chatId, text, author },
});

export const deleteMessage = (chatId, Id) => ({
    type: DELETE_MESSAGE,
    payload: { chatId, Id },
});
export const addChatMes = (chatId) => ({
    type: ADD_CHATMES,
    payload: chatId,
});
export const deleteChatMes = (chatId) => ({
    type: DELETE_CHATMES,
    payload: chatId,
});
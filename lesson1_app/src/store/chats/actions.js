export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETECHAT";

export const addChat = (newId, name) => ({
    type: ADD_CHAT,
    payload: { newId, name }
});

export const deleteChat = (Id) => ({
    type: DELETE_CHAT,
    payload: Id,
});
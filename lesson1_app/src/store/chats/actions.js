import { ref, onValue, set } from "firebase/database";
import { db } from "../../services/firebase";

export const DELETE_CHAT = "CHATS::DELETECHAT";
export const SET_CHATS = "CHATS::SET_CHATS";

export const setChats = (chats) => ({
    type: SET_CHATS,
    payload: chats,
});

export const initChats = () => (dispatch) => {
    const chatsDbRef = ref(db, "chats");
    onValue(chatsDbRef, (snapshot) => {
        const data = snapshot.val();
        dispatch(setChats(Object.values(data || {})));
    });
};

export const addChatFb = (chatID, name) => () => {
    const newId = chatID;
    const chatsDbRef = ref(db, `chats/${newId}`);
    set(chatsDbRef, {
        id: newId,
        name,
    });
}

export const deleteChatsFb = (chatID) => async () => {
    const chatsDbRef = ref(db, `chats/${chatID}`);
    const messDbRef = ref(db, `messages/${chatID}`);
    set(messDbRef, null);
    set(chatsDbRef, null);
}
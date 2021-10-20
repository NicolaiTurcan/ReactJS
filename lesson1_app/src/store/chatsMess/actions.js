import { onValue, ref, set } from "@firebase/database";
import { db } from "../../services/firebase";

export const SET_MESSAGES = "MESSAGES::SET_MESSAGES";

export const deleteMessageWithFirebase = (chatId, messageId) => async () => {
    const link = ref(db, `messages/${chatId}/${messageId}`);
    set(link, null);
};

// let timeout;
// export const addChatMesReplay = (chatId, text, author) => (dispatch) => {
//     dispatch(addMessage(chatId, text, author));
//     clearTimeout(timeout);
//     if (author !== 'Bot') {
//         timeout = setTimeout(() => {
//             dispatch(addMessage(chatId, "Test Message after 1,5 sec.", 'Bot'));
//         }, 1500);
//     }
// };

const setMessages = (messages) => ({
    type: SET_MESSAGES,
    payload: messages,
});

export const initMessages = () => (dispatch) => {
    const messagesDbRef = ref(db, 'messages');
    onValue(messagesDbRef, (snapshot) => {
        const data = snapshot.val();
        dispatch(setMessages(data || {}));
    });
}

export const addMessageFb = (text, author, chatId) => (dispatch) => {
    const newId = `message-${Date.now()}`;
    const messagesDbRef = ref(db, `messages/${chatId}/${newId}`);
    set(messagesDbRef, {
        author,
        text,
        id: newId,
    });
}
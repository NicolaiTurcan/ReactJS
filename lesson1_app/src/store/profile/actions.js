import { onValue, ref, set } from "@firebase/database";
import { db } from "../../services/firebase";

export const SET_NAME = 'PROFILE::Set_NAME';

export const setName = (name) => ({
    type: SET_NAME,
    payload: name,
});

export const initUserName = () => (dispatch) => {
    const userDbRef = ref(db, "user");
    onValue(userDbRef, (snapshot) => {
        const data = snapshot.val();
        dispatch(setName(Object.values(data || '')));
    });
};

export const addUserNameFb = (name) => (dispatch) => {
    set(ref(db, "user"), {
        username: name,
    });
    dispatch(setName(name));
}
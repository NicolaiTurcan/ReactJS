import { SET_NAME } from "./actions";

const initialState = {
    name: "",
};

export const profileReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_NAME: {
            return {
                ...state,
                name: payload,
            };
        }
        default:
            return state;
    }
};
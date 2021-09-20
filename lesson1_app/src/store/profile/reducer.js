import { CHANGE_NAME } from "./actions";

const initialState = {
    name: "User1",
};

export const profileReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGE_NAME: {
            return {
                ...state,
                name: payload,
            };
        }
        default:
            return state;
    }
};
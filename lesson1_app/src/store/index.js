import { createStore, combineReducers } from 'redux';
import { chatsReducer } from './chats/reducer';
import { chatsMessReducer } from './chatsMess/reducer';
import { profileReducer } from './profile/reducer';

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    chatsMess: chatsMessReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
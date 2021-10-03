import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/es/storage/session'
import thunk from 'redux-thunk';
import { chatsReducer } from './chats/reducer';
import { chatsMessReducer } from './chatsMess/reducer';
import { newsReducer } from './newsPage/reducer';
import { profileReducer } from './profile/reducer';

// создаем объект конфигурации для persist
const persistConfig = {
    key: 'nt161989',
    storage: storageSession,
};

// комбинируем редьюсеры
const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    chatsMess: chatsMessReducer,
    articles: newsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// создаем store с использованием persistedReducer
export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

// создаем persistor
export const persistor = persistStore(store);
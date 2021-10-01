import Routes from './Routes.js';
import './App.css';
import { Provider } from 'react-redux';
import { persistor, store } from './store/index.js';
import { PersistGate } from 'redux-persist/lib/integration/react';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Routes />
            </PersistGate>
        </Provider>
    );
}

export default App;
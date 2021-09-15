import Routes from './Routes.js';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/index.js';

function App() {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
}

export default App;
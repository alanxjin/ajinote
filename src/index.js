import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import Util from './utility/util';

const store = createStore(rootReducer, Util.loadDataFromLocal(Util.getLocalStoragePath()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();

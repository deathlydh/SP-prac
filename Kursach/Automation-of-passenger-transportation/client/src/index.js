import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import TransportationStore from './store/TransportationStore';

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        trip: new TransportationStore(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);
import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from './store/UserStore';
import ArtStore from './store/ArtStore';


export const Context = createContext(null)
// const { REACT_APP_API_URL } = process.env;

//console.log('http://localhost:5000/')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    art: new ArtStore(),
    }}>
    <App />
  </Context.Provider>
);



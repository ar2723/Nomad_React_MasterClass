import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './basic/App';
import App2 from './basic/App2';
import App3 from './App';
import Coin from './Coin';
import Movie from './Movie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/*<App />*/}
      {/*<App2 />*/}
      {/*<App3 />*/}
      {/*<Coin />*/}
      <Movie />
  </React.StrictMode>
);

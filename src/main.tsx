import React from 'react';
import { Provider } from 'context/Provider';
import ReactDOM from 'react-dom/client';
import App from 'App.tsx';
import 'assets/styles/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);

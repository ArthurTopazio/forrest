import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import App from 'views/App';
import AppStore from 'models/state/App';
import theme from './theme';

const store = new AppStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const initDOM = async () => {
  root.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  );
};

initDOM();

export default store;

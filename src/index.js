import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'utils/GlobalStyles';
import { theme } from 'utils/Theme';
import { App } from './components/App';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { AuthProvider } from 'AuthProvider/AuthProvider';

Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter basename="/Kinolib">
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// 處理 GitHub Pages 404 重新導向
if (sessionStorage.redirect) {
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect !== window.location.href) {
    window.history.replaceState(null, null, redirect);
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

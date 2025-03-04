import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// GitHub Pages SPA redirect script
(function() {
  // If we're not on GitHub Pages, return
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return;
  }

  // Parse the URL
  const search = window.location.search;
  const hash = window.location.hash;
  
  // Check if we need to redirect
  if (search.includes('?/')) {
    const redirectPath = search.substring(2);
    window.history.replaceState(null, null, 
      redirectPath + (hash || '')
    );
  }
})();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
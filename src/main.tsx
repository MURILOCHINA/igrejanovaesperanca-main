import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route } from './index'; // Isso puxa o seu código do index.tsx

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Route.options.component />
  </React.StrictMode>,
);
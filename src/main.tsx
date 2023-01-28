import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RecoilRoot } from 'recoil';
import { RecoilURLSyncJSON } from 'recoil-sync';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilURLSyncJSON location={{ part: 'queryParams' }}>
        <App />
      </RecoilURLSyncJSON>
    </RecoilRoot>
  </React.StrictMode>,
);

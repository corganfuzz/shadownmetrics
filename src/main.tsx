import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';
import '@cds/core/global.min.css';
import '@cds/core/styles/theme.dark.min.css';
import '@cds/city/css/bundles/default.min.css';
import './index.css'
import App from './App.tsx'
import '@clr/ui/clr-ui.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

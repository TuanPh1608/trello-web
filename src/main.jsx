import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CSSBaseline from '@mui/material/CssBaseline'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CSSBaseline />
    <App />
  </StrictMode>,
)

import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { globalCss } from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={globalCss}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

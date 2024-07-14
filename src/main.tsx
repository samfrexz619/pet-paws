import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CatApiContextProvider } from './context/CatApiContext.tsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CatApiContextProvider>
      <App />
    </CatApiContextProvider>
  </React.StrictMode>,
)

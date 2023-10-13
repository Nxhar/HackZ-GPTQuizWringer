import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Page from './Page.jsx'
import './index.css'
import Page2 from './Page2.jsx'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

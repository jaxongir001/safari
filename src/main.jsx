import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Footer from './components/Home/Footer.jsx'
import Navbar from './components/Home/Navbar.jsx'
import { SearchProvider } from './components/Home/useSearch.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SearchProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </BrowserRouter>
  </SearchProvider>
)



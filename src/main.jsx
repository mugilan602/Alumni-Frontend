import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./Pages/App"
import { BrowserRouter } from "react-router-dom"
import Footer from "./Pages/Footer/Footer"
import { AuthContextProvider } from './context/AuthContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
        <Footer />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./Components/App"
import {BrowserRouter} from "react-router-dom"
import Footer from "./Components/Footer/Footer"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
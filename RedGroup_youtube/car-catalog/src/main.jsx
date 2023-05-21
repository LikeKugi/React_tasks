import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import Router from "./components/ui/Router.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>,
)

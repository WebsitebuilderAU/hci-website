import React from 'react'
import ReactDOM from 'react-dom/client'
import ServicePage from './pages/ServicePage.jsx'
import { SERVICES } from './pages/serviceData.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ServicePage data={SERVICES.windows} />
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Navbar } from './components/Navbar.jsx'
import 'remixicon/fonts/remixicon.css'
import Footer from './components/Footer.jsx'
import Prelouder from './components/PreLouder.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Prelouder /> 
    <div className="container mx-auto px-4">
    <Navbar />
    <App />
    <Footer />
    </div>
  </StrictMode>,
)

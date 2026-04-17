import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./assets/CSS/style.css";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    <Footer/>
  </StrictMode>
)

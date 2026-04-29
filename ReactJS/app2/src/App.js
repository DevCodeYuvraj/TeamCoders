import {user} from "react";
import Home from "./Pages/Home";
import KnowMore from "./Pages/KnowMore";
import Services from "./Pages/Services";
import AboutUs from "./Pages/AboutUs";
import { BrowserRouter, Routes, Navigate, Route, Link } from 'react-router-dom';
import ContactUs from "./Pages/ContactUs";
function App() {
    return(
        <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/KnowMore" element={<KnowMore />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </BrowserRouter>
    )
}
export default App;
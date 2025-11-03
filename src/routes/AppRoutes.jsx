import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

export default function AppRoutes(){
return(
<Routes>
<Route path="/" element={<Home />}/>
<Route path="/services" element={<Services />}/>
<Route path="/portfolio" element={<Portfolio />}/>
<Route path="/contact" element={<Contact />}/>
</Routes>
);
}
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About/About";
import Academics from "./pages/Academics/Academics";
import FacilitiesPage from "./pages/Facilities/Facilities";
import Admission from "./pages/Admission/Admission";
import ContactUS from "./pages/Contact/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/facilities" element={<FacilitiesPage /> } />
          <Route path="/admissions" element={<Admission />} />
          <Route path="/contact" element={<ContactUS />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

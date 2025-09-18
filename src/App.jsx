import React,{ Suspense, lazy} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Layout = lazy(() => import("./components/Layout"));
const Index = lazy(() => import("./pages/Index"));
const BacktoTop = lazy(() => import("./components/BacktoTop"));
const About = lazy(() => import("./pages/About/About"));
const Academics = lazy(() => import("./pages/Academics/Academics"));
const FacilitiesPage = lazy(() => import("./pages/Facilities/Facilities"));
const Admission = lazy(() => import("./pages/Admission/Admission"));
const Students = lazy(() => import("./pages/Students/Students"));
const ContactUS = lazy(() => import("./pages/Contact/ContactUs"));

/*import Layout from "./components/Layout";
import Index from "./pages/Index";
import BacktoTop from "./components/BacktoTop";
import About from "./pages/About/About";
import Academics from "./pages/Academics/Academics";
import FacilitiesPage from "./pages/Facilities/Facilities";
import Admission from "./pages/Admission/Admission";
import Students from "./pages/Students/Students";
import ContactUS from "./pages/Contact/ContactUs";*/

function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<div className="text-center mt-10 font-bold text-blue-900">Loading...</div>}>
      <BacktoTop />
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/admissions" element={<Admission />} />
          <Route path="students-life" element={<Students />} />
          <Route path="/contact" element={<ContactUS />} />
        </Route>
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

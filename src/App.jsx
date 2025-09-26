import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import ScrolltoTop from "./components/ScrolltoTop";

const Layout = lazy(() => import("./components/Layout"));
const Index = lazy(() => import("./pages/Index"));
const BacktoTop = lazy(() => import("./components/BacktoTop"));
const About = lazy(() => import("./pages/About/About"));
const Academics = lazy(() => import("./pages/Academics/Academics"));
const FacilitiesPage = lazy(() => import("./pages/Facilities/Facilities"));
const Admission = lazy(() => import("./pages/Admission/Admission"));
const Students = lazy(() => import("./pages/Students/Students"));
const ContactUS = lazy(() => import("./pages/Contact/ContactUs"));
const AllGallery = lazy(() => import("./pages/Gallery/AllGallery"));
const GalleryAlbum = lazy(() => import("./pages/Gallery/GalleryAlbum"));


function App() {
  return (
    <BrowserRouter>
      <ScrolltoTop />
      <Suspense fallback={<Loader />}>
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
            <Route path="/all-gallery" element={<AllGallery />} />
            <Route path="/gallery/:albumName" element={<GalleryAlbum />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

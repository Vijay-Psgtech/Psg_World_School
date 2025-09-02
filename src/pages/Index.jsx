import React from "react";
import Banner from "./Banner/Banner";
import Abouthome from "./About/Abouthome";
import Moto from "./About/Moto";
import Education from "./Education/Education";
import CampusHighlights from "./Campus/CampusHighlights";
import StudentLife from "./Students/StudentLife";
import AdmissionProcess from "./Admission/AdmissionProcess";
import WhatsappIcon from "../components/WhatsppIcon";


const Index = () => {
  return (
    <div>
      <Banner />
      <Abouthome />
      <Moto />
      <Education />
      <CampusHighlights />
      <StudentLife />
      <AdmissionProcess />
      <WhatsappIcon />
    </div>
  );
};

export default Index;

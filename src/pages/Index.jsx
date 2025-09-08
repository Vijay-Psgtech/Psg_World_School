import React from "react";
import Banner from "./Banner/Banner";
import Abouthome from "./About/Abouthome";
import Moto from "./About/Moto";
import AcademicsHome from "./Academics/AcademicsHome";
import CampusHighlights from "./Campus/CampusHighlights";
import StudentLife from "./Students/StudentLife";
import AdmissionProcess from "./Admission/AdmissionProcess";
import WhatsappIcon from "../components/WhatsppIcon";
import ChatBot from "../components/ChatBot";


const Index = () => {
  return (
    <div>
      <Banner />
      <Abouthome />
      <Moto />
      <AcademicsHome />
      <CampusHighlights />
      <StudentLife />
      <AdmissionProcess />
      <WhatsappIcon />
      <ChatBot />
    </div>
  );
};

export default Index;

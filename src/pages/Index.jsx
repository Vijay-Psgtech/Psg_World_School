import React from 'react';
import Banner from './Banner/Banner';
import Abouthome from './About/Abouthome';  
import NumbersGlance from './Glance/NumbersGlance';
import PrincipalTestimonial from './Testimonial/PrincipalTestimonial';
import Education from './Education/Education';
import CampusHighlights from './Campus/CampusHighlights';
import Gallery from './Gallery/Gallery';
import News from './News/News';
import Testimonial from './Testimonial/Testimonial';
import Contact from './Contact/Contact';


const Index = () => {
  return (
    <div>
      <Banner />
      <Abouthome />
      <NumbersGlance />
      <PrincipalTestimonial />
      <Education />
      <CampusHighlights />
      <Gallery />
      <News />
      <Testimonial />
      <Contact />
    </div>
  )
}

export default Index
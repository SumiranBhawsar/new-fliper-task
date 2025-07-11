import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import Image from '../components/Image'
import WhyChooseUs from '../components/WhyChooseUs'
import Image1 from '../components/Image1'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import ClientsSection from '../components/ClientsSection'
import FooterNewsletter from '../components/FooterNewsletter'

function LandingPage() {
  return (
    <div>
      <NavBar />

      <HeroSection />

      <Image />

      <WhyChooseUs />

      <Image1 />

      <AboutSection />

      <ProjectsSection />

      <ClientsSection />

      <FooterNewsletter />
    </div>
  )
}

export default LandingPage
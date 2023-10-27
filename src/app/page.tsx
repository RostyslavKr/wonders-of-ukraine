import { lazy } from 'react';
const Header = lazy(() => import("@/components/Header"))
const Hero = lazy(() => import("@/components/Hero"))
const AboutUs = lazy(() => import("@/components/AboutUs"))
const OurTours = lazy(() => import("@/components/OurTours"))
const Gallery = lazy(() => import("@/components/Gallery"))
const Reviews = lazy(() => import("@/components/Reviews"))
const StartTravel = lazy(() => import("@/components/StartTravel"))
const Footer = lazy(() => import("@/components/Footer"))

export default function Home () {
  return (
    <><Header />
    <main>
      
      <Hero />
      <AboutUs />
      <OurTours />
      <Gallery />
      <Reviews />
      <StartTravel />
    </main>
    <Footer /></>
  
  )
}

import AboutSection from './about'
import ContactSection from './contact'
import Footer from './footer'
import NavBar from './navbar'
import ScrollTop from './scrolltop'
import SolarVideoShowcase from './solarWork'
import TeamSection from './team'

const Home = ()=> {

  return (
    <>
      <NavBar/>
      <AboutSection/>
      <ContactSection/>
      <SolarVideoShowcase/>
      <TeamSection/>

    <ScrollTop/>
      <Footer/>
      
    </>
  )
}

export default Home
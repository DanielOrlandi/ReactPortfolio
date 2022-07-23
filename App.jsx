import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Certificates from './components/certificates/Certificates'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Portfolio />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </>
  )
}

export default App
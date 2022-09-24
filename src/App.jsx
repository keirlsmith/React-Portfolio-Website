import React from 'react'
import Header from './components/header/Header';
import Nav from './components/header/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Photography from './components/photography/Photography';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Photography />
        <Contact />
        <Footer />
    </>
  )
}

export default App;
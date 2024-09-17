import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
import { Header } from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import { Project } from './Components/Projects/Projects';
import { GlobalStyle } from './Styles/GlobalStyles';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from 'tsparticles';
import { Container } from './Components/Main/styles';

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log("init");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => { };

  return (
    <>
      <GlobalStyle />
      <Router>  {/* Single Router wrapping all the components */}
        <Container>
          {init && (
            <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              style={{ zIndex: 1 }}
              options={{
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onClick: { enable: true, mode: "push" },
                    onHover: { enable: true, mode: "repulse" },
                    resize: true,
                  },
                  modes: {
                    push: { quantity: 4 },
                    repulse: { distance: 200, duration: 0.4 },
                  },
                },
                particles: {
                  color: { value: "#fff" },
                  links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: { default: "bounce" },
                    speed: 2,
                  },
                  number: {
                    density: { enable: true, area: 800 },
                    value: 160,
                  },
                  opacity: { value: 0.5 },
                  shape: { type: "circle" },
                  size: { value: { min: 1, max: 5 } },
                },
                detectRetina: true,
                background: { color: '#000', opacity: 0.5 },
              }}
            />
          )}
          <Header />  {/* Ensure the Header is inside the Router */}
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Project />} />
          </Routes>
        </Container>
      </Router>
      <Contact />
    </>
  );
};

export default App;

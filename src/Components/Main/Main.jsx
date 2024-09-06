import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import Hero from '../Hero/Hero';
import { About } from '../About/About';
import { Project } from '../Projects/Projects';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from 'tsparticles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Main = () => {
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
        <BrowserRouter>

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
                                color: { value: "#bae6fd" },
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
                            background: { color: '#000', opacity: 0.1 },
                        }}
                    />
                )}

                <Routes>
                    <Route path='/' element={<Hero />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Project />} />
                </Routes>
            </Container>
        </BrowserRouter>

    );
};

export default Main;

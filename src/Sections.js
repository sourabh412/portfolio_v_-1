import React from 'react';
import About from './components/About';
import Benchmarks from './components/Benchmarks';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';

function Sections() {
    return (
        <div id="sections_main_div">
            <section className='h-auto mt-1 py-20' id="about">
                <About />
            </section>
            <section className='h-auto mt-1 py-20' id="projects">
                <Projects />
            </section>
            <section className='h-screen' id="benchmarks">
                <Benchmarks />
            </section>
            <section className='h-auto mt-1 py-20' id="skills">
                <Skills />
            </section>
            <section className='h-auto mt-1 py-20' id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Sections
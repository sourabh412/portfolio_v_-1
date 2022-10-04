import React from 'react';
import About from './components/About';

function Sections() {
    return (
        <>
            <section className='h-auto mt-1 py-20' id="about">
                <About />
            </section>
            <section className='h-screen' id="projects">

            </section>
            <section className='h-screen' id="benchmarks">

            </section>
            <section className='h-screen' id="skills">

            </section>
            <section className='h-screen' id="contact">

            </section>
        </>
    )
}

export default Sections
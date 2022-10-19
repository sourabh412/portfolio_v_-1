import React, { useEffect } from 'react';
import About from './components/About';
import Benchmarks from './components/Benchmarks';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';

function Sections() {

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {

            entries.forEach(({ target, isIntersecting }) => {
                var temp = document.getElementById("scroll_loc");
                var temp1 = temp.querySelector("#"+target.getAttribute("id"));
                if (isIntersecting && temp1!==null) {
                    temp.querySelectorAll("*").forEach(ele => {
                        ele.classList.remove("bg-white","animate-pulse");
                    });
                    temp1.classList.add("bg-white","animate-pulse");
                    console.log(temp1);
                }
            });
        });
        
        const elemsWithIds = document.querySelectorAll("*[id]");
        elemsWithIds.forEach(elem => observer.observe(elem));
    }, [])



    return (
        <div id="sections_main_div">
            <section className='h-auto mt-1 py-20' id="about">
                <About />
            </section>
            <section className='h-auto mt-1 py-20' id="projects">
                <Projects />
            </section>
            <section className='h-auto mt-1 py-20' id="skills">
                <Skills />
            </section>
            <section className='h-auto mt-1 py-20' id="benchmarks">
                <Benchmarks />
            </section>
            <section className='h-auto mt-1 py-20' id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Sections
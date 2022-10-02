import React from 'react';
import { motion } from 'framer-motion';
import About from './components/About';

const up_anim = {
    offscreen: {
        position: "relative",
        y: 300,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1
    }
}

function Sections() {
    return (
        <>
            <section className='h-auto mt-1 py-20' id="about">
                <About />
            </section>
            <motion.section className='h-screen' id="projects"
                variants={up_anim}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false }}
                transition={{ duration: 1 }}
            >

            </motion.section>
            <motion.section className='h-screen' id="benchmarks"
                variants={up_anim}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false }}
                transition={{ duration: 1 }}
            >

            </motion.section>
            <motion.section className='h-screen' id="skills"
                variants={up_anim}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false }}
                transition={{ duration: 1 }}
            >

            </motion.section>
            <motion.section className='h-screen' id="contact"
                variants={up_anim}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false }}
                transition={{ duration: 1 }}
            >

            </motion.section>
        </>
    )
}

export default Sections
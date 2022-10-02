import React from 'react';
import { motion } from 'framer-motion';

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
        <div>
            <motion.div className='h-screen mt-1' id="about"
                variants={up_anim}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h1 className='text-9xl text-white'>Hello world</h1>
                <h2 className='text-7xl text-white'>This is div 1......Testing...</h2>
            </motion.div>
            <motion.div className='h-screen' id="projects"
                variants={up_anim}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >

            </motion.div>
            <motion.div className='h-screen' id="benchmarks"
                variants={up_anim}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >

            </motion.div>
            <motion.div className='h-screen' id="skills"
                variants={up_anim}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >

            </motion.div>
            <motion.div className='h-screen' id="contact"
                variants={up_anim}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >

            </motion.div>
        </div>
    )
}

export default Sections
import React from 'react';
import { motion } from 'framer-motion';
import frontend from "../assets/frontend.png";
import egg from "../assets/egg.png";

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

function About() {
    return (
        <>
            <motion.div
            variants={up_anim}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            >
                <h1 className="text-5xl text-center text-white font-bold ml-4 leading-relaxed">I'm &#12296;<span className="text-[#65C982]">Sourabh</span> /&#12297;<br />
                A 3rd Year <span className="text-[#FFCF3F]">Undergrad</span> at <span className="text-[#FFCF3F]">BMSCE</span><br />
                "Code is like humor.<br />When you have to explain it, it’s bad."<br />
                </h1>
            </motion.div>
            <div className="flex justify-center mt-4">
                <div className='h-96 w-48 bg-transparent mx-8'>
                    <img src={frontend} alt="" className="w-full h-48 rounded-2xl"/>
                </div>
                <div className='h-96 w-48 bg-transparent mx-8'>
                    <img src={frontend} alt="" className="w-full h-48 rounded-2xl"/>
                </div>
                <div className='h-96 w-48 bg-transparent mx-8'>
                    <img src={frontend} alt="" className="w-full h-48 rounded-2xl"/>
                </div>
                <div className='h-96 w-48 bg-transparent mx-8'>
                    <img src={frontend} alt="" className="w-full h-48 rounded-2xl"/>
                </div>
            </div>
        </>
    )
}

export default About
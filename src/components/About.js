import React from 'react';
import { motion } from 'framer-motion';
import frontend from "../assets/frontend.png";
import dataSci from "../assets/dataSci.jpg";
import backend from "../assets/backend.jpg";
import app from "../assets/app.jpg";

const outer = {
    offscreen: {
        opacity: 0
    },
    onscreen: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const inner = {
    offscreen: {
        opacity: 0,
        y: 300
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8
        }
    }
}

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
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl text-center text-white font-bold ml-4 leading-relaxed">I'm &#12296;<span className="text-5xl text-[#40B6F2]">Sourabh</span> /&#12297;<br />
                    A 3rd Year <span className="text-5xl text-[#FFCF3F]">Undergrad</span> at <span className="text-5xl text-[#FFCF3F]">BMSCE</span><br />
                    My thoughts on Coding??? 🤔<br />
                    <span className='italic text-gray-300'>"Code is like humor. When you have to explain it, it’s bad."</span>
                </h1>
            </motion.div>
            <motion.div id="about_sm_divs" className="flex justify-center mt-4"
                variants={outer}
                initial="offscreen"
                whileInView="onscreen"
            >
                <motion.div className='h-auto w-48 bg-transparent my-4 mx-8'
                    variants={inner}
                    whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                >
                    <img src={frontend} alt="" className="w-full h-48 rounded-2xl" />
                    <h2 className="text-lg font-bold mt-5 text-white">Frontend Developer</h2>
                    <p className="text-sm text-gray-300 mt-2">I am a frontend developer and have vast experience in developing beautiful mobile first web applications with functional and really smooth user experience using <b>modern react and CSS liberaries</b> along with knowledge on <b>Three.js</b></p>
                </motion.div>
                <motion.div className='h-auto w-48 bg-transparent my-4 mx-8'
                    variants={inner}
                    whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                >
                    <img src={dataSci} alt="" className="w-full h-48 rounded-2xl" />
                    <h2 className="text-lg font-bold mt-5 text-white">Data Scientist</h2>
                    <p className="text-sm text-gray-300 mt-2">From the time I have been exposed to the world of data science , I have had an immense amount of passion working with data what I feel is the modern age oil. I am currently learning more about this field and have great interest in working on related projects</p>
                </motion.div>
                <motion.div className='h-auto w-48 bg-transparent my-4 mx-8'
                    variants={inner}
                    whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                >
                    <img src={backend} alt="" className="w-full h-48 rounded-2xl" />
                    <h2 className="text-lg font-bold mt-5 text-white">Backend Developer</h2>
                    <p className="text-sm text-gray-300 mt-2">I am a backend developer and have vast experience in developing web applications with variety of business logic in <b>Django</b>, <b>PHP</b>, <b>JavaScript frameworks</b>, <b>MySQL</b>, <b>PostgreSQL</b>, <b>MongoDB</b></p>
                </motion.div>
                <motion.div className='h-auto w-48 bg-transparent my-4 mx-8'
                    variants={inner}
                    whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                >
                    <img src={app} alt="" className="w-full h-48 rounded-2xl" />
                    <h2 className="text-lg font-bold mt-5 text-white">Android Developer</h2>
                    <p className="text-sm text-gray-300 mt-2">I am an android developer working primarily with <b>java</b> and <b>xml</b> on <b>Android Studio</b>. I have developed few apps as custom practice projects along with <b>sqLite Db</b> and <b>Room Db</b>. I am looking forward to learning <b>Flutter</b> to build apps that work on Android as well as IOS.</p>
                </motion.div>
            </motion.div>
        </>
    )
}

export default About
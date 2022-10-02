import React from 'react';
import { motion } from 'framer-motion';
import pylogo from "../assets/pylogo.png";
import reactlogo from "../assets/reactlogo.png";
import javalogo from "../assets/javalogo.png";
import alt from "../assets/alt.svg";

function Landing() {
    return (
        <>
            <motion.div className="h-auto w-72 p-6 mr-10 bg-white rounded-2xl md:top-14 shadow-cus"
                initial={{
                    opacity: 0,
                    position: "absolute",
                    left: "35vw",
                    top: "30vh",
                    zIndex: -6,
                    scale: 0
                }}
                whileInView={{
                    opacity: 1,
                    x: -350,
                    scale: 1
                }}
                transition={{
                    delay: 1,
                    duration: 0.75,
                }}
            >
                <div className="grid grid-rows-3 grid-flow-col gap-0 items-center">
                    <div className="row-span-3 text-4xl mr-2">
                        👋
                    </div>
                    <div className="col-span-2">
                        <p className="text-gray-400">Hey there, I am </p>
                    </div>
                    <div className="row-span-2 col-span-2">
                        <span className='text-4xl font-bold font-sans tracking-wide'>SOURABH</span>
                    </div>
                </div>
            </motion.div>
            <motion.div className="h-auto w-64 p-3 px-6 ml-20 mt-14 bg-white rounded-2xl shadow-cus leading-4"
                initial={{
                    opacity: 0,
                    position: "absolute",
                    left: "35vw",
                    top: "60vh",
                    scale: 0,
                    zIndex: -6
                }}
                whileInView={{
                    opacity: 1,
                    x: -350,
                    scale: 1
                }}
                transition={{
                    delay: 1.5,
                    duration: 0.75,
                }}
            >
                <p className="text-xs text-gray-800 text-right">
                    FULL STACK WEB DEVELOPER <br />
                    ANDROID DEVELOPER<br />
                    DATA SCIENCE ENTHUSIAST </p>
            </motion.div>
            <motion.img src={pylogo} alt={alt} className="rounded-full h-40 w-40 bg-white p-6 shadow-cus"
            initial={{
                opacity: 0,
                position: "absolute",
                left: "35vw",
                top: "40vh",
                zIndex: -6,
                scale: 0
            }}
            whileInView={{
                opacity: 1,
                x: 600,
                scale: 1
            }}
            transition={{
                delay: 1,
                duration: 0.75,
            }}
            />
            <motion.img src={reactlogo} alt={alt} className="rounded-full h-28 w-28 bg-white p-6 shadow-cus"
            initial={{
                opacity: 0,
                position: "absolute",
                left: "35vw",
                top: "20vh",
                zIndex: -6,
                scale: 0
            }}
            whileInView={{
                opacity: 1,
                x: 500,
                scale: 1
            }}
            transition={{
                delay: 1,
                duration: 0.75,
            }}
            />
            <motion.img src={javalogo} alt={alt} className="rounded-full h-20 w-20 bg-white p-3 shadow-cus"
            initial={{
                opacity: 0,
                position: "absolute",
                left: "45vw",
                top: "70vh",
                zIndex: -6,
                scale: 0
            }}
            whileInView={{
                opacity: 1,
                x: 300,
                scale: 1
            }}
            transition={{
                delay: 1,
                duration: 0.75,
            }}
            />
        </>
    )
}

export default Landing
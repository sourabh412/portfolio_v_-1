import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import alt from "../assets/alt.svg";

const up_anim = {
    offscreen: {
        position: "relative",
        y: 100,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1
    }
}

function Projects() {
    const [git, setgit] = useState([]);
    useEffect(() => { fetch("https://api.github.com/users/sourabh412/repos").then(data => data.json()).then(result => setgit(result)) }, []);

    return (
        <>
            <motion.div
                variants={up_anim}
                initial="offscreen"
                whileInView="onscreen"
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl text-center text-white font-bold ml-4 leading-relaxed font-poppins tracking-wide">My &#12296;<span className="text-5xl text-[#40B6F2] font-gemunu">Projects</span> /&#12297; Section</h1>
            </motion.div>
            <div className='w-full h-auto flex flex-wrap justify-center gap-7 my-10'>
                <button className='p-2 px-4 rounded-lg bg-white hover:bg-rose-500 text-bg-gray-700 hover:text-white duration-500 font-bold text-sm' type="button">Web App</button>
                <button className='p-2 px-4 rounded-lg bg-white hover:bg-rose-500 text-bg-gray-700 hover:text-white duration-500 font-bold text-sm' type="button">Mobile App</button>
                <button className='p-2 px-4 rounded-lg bg-white hover:bg-rose-500 text-bg-gray-700 hover:text-white duration-500 font-bold text-sm' type="button">Data Science</button>
                <button className='p-2 px-4 rounded-lg bg-white hover:bg-rose-500 text-bg-gray-700 hover:text-white duration-500 font-bold text-sm' type="button">Others</button>
                <button className='p-2 px-4 rounded-lg bg-white hover:bg-rose-500 text-bg-gray-700 hover:text-white duration-500 font-bold text-sm proj_active' type="button">All</button>
            </div>
            <div className='lg:w-4/5 h-auto mx-auto flex flex-wrap justify-center gap-20'>
                {
                    git.map((item) => (
                        <div key={item.id} className="w-72 h-96 p-4 rounded-md bg-white hover:drop-shadow-2xl duration-500">
                            <img src={"https://raw.githubusercontent.com/sourabh412/"+item.name+"/master/display.png"} alt="error" className="max-h-72 rounded-md"/>
                            <div className="relative -top-6 mx-auto text-center h-6 w-fit px-4 bg-white rounded-t-lg">{item.language}</div>
                            <h1>{item.name}</h1>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Projects
import React from 'react';
import { motion } from 'framer-motion';
import skills from '../assets/skills/skill.json';

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
    y: 100
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
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1
  }
}

function Skills() {
  return (
    <>
      <motion.div
        variants={up_anim}
        initial="offscreen"
        whileInView="onscreen"
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl text-center text-white font-bold ml-4 leading-relaxed font-poppins tracking-wide">My &#12296;<span className="text-5xl text-[#40B6F2] font-gemunu">Skills</span> /&#12297; Section</h1>
      </motion.div>
      <motion.div className='flex flex-wrap justify-center gap-20 md:w-4/5 mx-auto my-10 mt-14'
        variants={outer}
        initial="offscreen"
        whileInView="onscreen"
        transition={{ duration: 0.5 }}
      >
        {
          skills.map((item) => (
            <motion.div key={item.name} className='h-20 w-20 flex flex-col gap-3 items-center hover:drop-shadow-[0_15px_15px_rgba(0,0,0,0.3)] p-4 rounded-full bg-white'
              variants={inner}
              whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
            >
              <img src={ require("../assets/skills/"+item.img) } alt=""/>
              <p className='text-gray-300 text-md font-roboto-400 mt-1'>{item.name}</p>
            </motion.div>
          ))
        }
      </motion.div>
    </>
  )
}

export default Skills


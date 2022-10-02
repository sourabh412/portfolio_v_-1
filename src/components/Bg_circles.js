import React from 'react';
import { motion } from 'framer-motion';

const randborder = {
  offscreen: {
    y: 100,
    zIndex: -10
  },
  onscreen: {
    borderRadius: ["23% 77% 43% 57% / 27% 47% 53% 73%", "48% 52% 43% 57% / 52% 47% 53% 48%", "51% 49% 68% 32% / 74% 47% 53% 26%", "58% 42% 44% 56% / 37% 56% 44% 63%"],
    transition: {
      yoyo: Infinity,
      duration: 3
    }
  }
}

function Bg_circles() {
  return (
    <>
      <motion.div className='h-96 w-96 rounded-full' id="Bg_circles_1"
        variants={randborder}
        initial="offscreen"
        animate="onscreen"
      ></motion.div>
      <div id="Bg-circle_2"></div>
    </>
  )
}

export default Bg_circles
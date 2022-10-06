import React from 'react';
import { motion } from 'framer-motion';

const randborder = {
  offscreen: {
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

const rotate = {
  offscreen: {},
  onscreen: {
    rotateY: 180,
    rotateZ: 180,
    rotateX: -90,
    transition: {
      yoyo: Infinity,
      duration: 25
    }
  }
}

function Bg_circles() {
  return (
    <>
      <motion.div className='rounded-full' id="Bg_circle_1"
        variants={randborder}
        initial="offscreen"
        animate="onscreen"
      ></motion.div>
      <div id="Bg_circle_2"></div>
      <div id="Bg_circle_3"></div>
      <motion.div id="Bg_square_1"
        variants={rotate}
        initial="offscreen"
        animate="onscreen"
      ></motion.div>
    </>
  )
}

export default Bg_circles
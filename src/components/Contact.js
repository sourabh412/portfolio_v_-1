import React from 'react';
import { motion } from 'framer-motion';
import phone from '../assets/phone.png';
import gmail from '../assets/gmail.png';

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

function Contact() {
  return (
    <>
      <motion.h1 className='text-center text-5xl text-white font-dmsans font-bold'
        variants={up_anim}
        initial="offscreen"
        whileInView="onscreen"
        transition={{ duration: 0.5 }}
      >Grab Some <span className="text-6xl text-[#40B6F2] font-gemunu">Coffee</span> & <span className="text-6xl text-[#40B6F2] font-gemunu">Connect</span> With Me</motion.h1>
      <motion.div className="flex min-h-full items-center justify-center pt-6 px-4 sm:px-6 lg:px-8"
        variants={up_anim}
        initial="offscreen"
        whileInView="onscreen"
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-2xl space-y-8">
          <div className='flex flex-wrap justify-center gap-10 mb-14'>
            <a className="px-6 py-4 w-auto bg-[#fef4f5] flex items-center gap-3 flex-1 rounded-lg hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] duration-500" href='mailto:hiremathsourabh12@gmail.com' rel="noreferrer"><span className='h-10 w-10 inline-block'><img src={gmail} alt="imgs" /></span> hiremathsourabh12@gmail.com</a>
            <a className="px-6 py-4 w-auto bg-[#f2f7fb] flex items-center gap-3 flex-1 rounded-lg hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] duration-500" href='tel:+91 7204593495' rel="noreferrer"><span className='h-10 w-10 inline-block'><img src={phone} alt="imgs" /></span> +91 7204593495</a>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-4 my-8 text-[#313bac] font-dmsans placeholder-gray-500 focus:z-10 focus:outline-rose-300 focus:bg-[#f2f7fb] sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-4 my-8 text-[#313bac] font-dmsans placeholder-gray-500 focus:z-10 focus:outline-rose-300 focus:bg-[#f2f7fb] sm:text-sm"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <textarea
                  id="email-text"
                  name="email-text"
                  rows="5"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-4 my-8 text-[#313bac] font-dmsans placeholder-gray-500 focus:z-10 focus:outline-rose-300 focus:bg-[#f2f7fb] sm:text-sm"
                  placeholder="Your Message"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group mx-auto mt-14 relative flex w-1/2 max-w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  )
}

export default Contact
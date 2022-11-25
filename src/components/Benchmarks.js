import React from 'react';
import { motion } from 'framer-motion';
import hackerrank from '../assets/skills/hackerrank.png';
import leetcode from '../assets/skills/leetcode.png';

// "https://leetcode-stats-api.herokuapp.com/sourabh412"

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

const outer = {
    offscreen: {
        opacity: 0
    },
    onscreen: {
        opacity: 1,
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

function Benchmarks() {
    // const [leet, setLeet] = useState([]);
    // const [hack, setHack] = useState([]);
    // useEffect(() => { fetch("https://leetcode-stats-api.herokuapp.com/sourabh412").then(data => data.json()).then(result => setLeet(result)) }, []);
    // useEffect(() => {fetch("https://www.hackerrank.com/sourabh_is20").then(data=>data.json()).then(result=>setHack(result))},[]);
    // console.log(leet);  
    // console.log(hack);  

    return (
        <>
            <motion.div
                variants={up_anim}
                initial="offscreen"
                whileInView="onscreen"
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl text-center text-white font-bold ml-4 leading-relaxed font-poppins tracking-wide">Check out my &#12296;<span className="text-5xl text-[#40B6F2] font-gemunu">Scores</span> /&#12297;</h1>
            </motion.div>
            <motion.div className='lg:w-4/5 h-auto mx-auto flex flex-wrap justify-center gap-40 mt-14'
                variants={outer}
                initial="offscreen"
                whileInView="onscreen"
                transition={{ duration: 0.5 }}
            >
                <motion.div className='hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] duration-500'
                    variants={inner}
                    whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
                >
                    <a className='text-center' href="https://leetcode.com/sourabh412/" target="_blank" rel="noreferrer">
                        <img className='bg-white p-10 rounded-full h-64 w-64 shadow-cus object-scale-down' src={leetcode} alt="" />
                        <p className='mt-5 text-gray-300 text-2xl font-roboto tracking-wider'>Leetcode</p>
                    </a>
                </motion.div>
                <motion.div className='hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] duration-500'
                    variants={inner}
                    whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                >
                    <a className='text-center' href="https://www.hackerrank.com/sourabh_is20" target="_blank" rel="noreferrer">
                        <img className='bg-white p-10 rounded-full h-64 w-64 shadow-cus' src={hackerrank} alt="" />
                        <p className='mt-5 text-gray-300 text-2xl font-roboto tracking-wider'>Hackerrank</p>
                    </a>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Benchmarks
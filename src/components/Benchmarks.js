import React, { useState, useEffect } from 'react';

// "https://leetcode-stats-api.herokuapp.com/sourabh412"


function Benchmarks() {
    const [leet, setLeet] = useState([]);
    // const [hack, setHack] = useState([]);
    useEffect(() => { fetch("https://leetcode-stats-api.herokuapp.com/sourabh412").then(data => data.json()).then(result => setLeet(result)) }, []);
    // useEffect(() => {fetch("https://www.hackerrank.com/sourabh_is20").then(data=>data.json()).then(result=>setHack(result))},[]);
    // console.log(leet);  
    // console.log(hack);  

    return (
        <>
            {/* <div className='flex flex-row justify-evenly'>
                <div className='w-1/2 h-auto p-3'>
                    
                </div>
                <div className='w-1/2 h-auto p-3'>
                    
                </div>
            </div> */}
            <div className='flex items-center justify-center h-full'>
                <h1 className='text-7xl text-white'>Benchmarks</h1>
            </div>
        </>
    )
}

export default Benchmarks
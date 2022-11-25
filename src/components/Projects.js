import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import gitDesc from '../assets/git.json';

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
    function sort_by_key(array, key) {
        return array.sort(function (a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

    const joinById = (...lists) =>
        Object.values(
            lists.reduce(
                (idx, list) => {
                    list.forEach((record) => {
                        if (idx[record.id])
                            idx[record.id] = Object.assign(idx[record.id], record)
                        else
                            idx[record.id] = record
                    })
                    return idx
                },
                {}
            )
        )

    let newGit = joinById(git, gitDesc);
    sort_by_key(newGit, 'id');

    function filterBtn(by,bttn) {
        //change button
        const allBtns = document.getElementById('FilterBtns');
        const selectedBtn = allBtns.querySelector("#"+bttn);
        allBtns.querySelectorAll("*").forEach(b => {
            b.classList.remove("proj_active");
        });
        selectedBtn.classList.add("proj_active");

        //change projects
        const allProjs = document.getElementById('allProjs');
        const show = allProjs.querySelectorAll("."+by);
        allProjs.querySelectorAll(".ProjSelection").forEach(proj => {
            proj.classList.add("hidden");
        });
        switch (by) {
            case "web":
                show.forEach(proj => {
                    proj.classList.remove("hidden");
                });
                break;
            case "mobile":
                show.forEach(proj => {
                    proj.classList.remove("hidden");
                });
                break;
            case "DS":
                show.forEach(proj => {
                    proj.classList.remove("hidden");
                });
                break;
            case "others":
                show.forEach(proj => {
                    proj.classList.remove("hidden");
                });
                break;
            default:
                allProjs.querySelectorAll(".ProjSelection").forEach(proj => {
                    proj.classList.remove("hidden");
                });
                break;
        }
    }

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
            <motion.div id="FilterBtns" className='w-full h-auto flex flex-wrap justify-center gap-7 my-10'
                variants={up_anim}
                initial="offscreen"
                whileInView="onscreen"
                transition={{ duration: 0.5 }}
            >
                <button id="web" onClick={()=>{filterBtn("web","web")}} className='p-2 px-4 rounded-lg bg-white hover:bg-rose-500 text-bg-gray-700 hover:text-white duration-500 font-bold text-sm' type="button">Web App</button>
                <button id="mobile" onClick={()=>{filterBtn("mobile","mobile")}} className='p-2 px-4 rounded-lg bg-white hover:bg-rose-500 text-bg-gray-700 hover:text-white duration-500 font-bold text-sm' type="button">Mobile App</button>
                <button id="DS" onClick={()=>{filterBtn("DS","DS")}} className='p-2 px-4 rounded-lg bg-white hover:bg-rose-500 text-bg-gray-700 hover:text-white duration-500 font-bold text-sm' type="button">Data Science</button>
                <button id="others" onClick={()=>{filterBtn("others","others")}} className='p-2 px-4 rounded-lg bg-white hover:bg-rose-500 text-bg-gray-700 hover:text-white duration-500 font-bold text-sm' type="button">Others</button>
                <button id="all" onClick={()=>{filterBtn("all","all")}} className='p-2 px-4 rounded-lg bg-white hover:bg-rose-500 text-bg-gray-700 hover:text-white duration-500 font-bold text-sm proj_active' type="button">All</button>
            </motion.div>
            <motion.div id="allProjs" className='lg:w-4/5 h-auto mx-auto flex flex-wrap justify-center gap-20'
                variants={outer}
                initial="offscreen"
                whileInView="onscreen"
                transition={{ duration: 0.5 }}
            >
                {
                    newGit.map((item) => (
                        <motion.div key={item.id} className={(item.name1) ? "w-72 h-auto p-4 rounded-md bg-white hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] ProjSelection "+item.type : "hidden"}
                            variants={inner}
                            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                        >
                            <img src={"https://raw.githubusercontent.com/sourabh412/" + item.name + "/master/display.png"} alt="error" className="max-h-72 rounded-md" />
                            <div className="relative -top-6 mx-auto text-center h-6 w-fit px-4 bg-white rounded-t-lg">{item.language}</div>
                            <div className="flex justify-center gap-6">
                                <a href={item.link} target="_blank" className={(!item.link) ? "hidden" : ""} rel="noreferrer">
                                    <div>
                                        <svg className='p-1 rounded-full hover:bg-gray-700 hover:fill-white duration-500' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path>
                                        </svg>
                                    </div>
                                </a>
                                <a href={item.html_url} target="_blank" rel="noreferrer">
                                    <div>
                                        <svg className='p-1 rounded-full hover:bg-gray-700 hover:fill-white duration-500' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
                                    </div>
                                </a>
                            </div>
                            <h1 className='text-center text-base font-bold font-roboto-300 mb-3'>{(item.name1)?item.name1:""}</h1>
                            <p className='text-gray-500 text-justify'>{(item.desc)?item.desc:""}</p>
                        </motion.div>
                    ))
                }
            </motion.div>
        </>
    )
}

export default Projects
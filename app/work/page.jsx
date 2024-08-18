"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger, 
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "School Website",
    description: "This SCHOOL WEBSITE project aims to create a modern, user-friendly, and informative online presence for La Consolacion College Tanauan. The website serve as a digital hub for students, parents, faculty, alumni, and prospective students, providing them with easy access to essential information, resources, and services.",
    stack: [{ name: "Wordpress"}],
    image: "/assets/work/thumb1.png",
    live: "https://lcctanauan.edu.ph/",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "Interactive School Website with Chatbot",
    description: "This INTERACTIVE SCHOOL WEBSITE project aims to create an engaging and user-friendly online platform for the school community. The website will serve as a comprehensive source of information for students, parents, faculty, alumni, and prospective students. Additionally, it will feature an intelligent chatbot that provides instant assistance and answers queries, enhancing the user experience and improving communication.",
    stack: [{ name: "Html 5"}, { name: "Css 3"}, { name: "Javascript"}, { name: "API"}],
    image: "/assets/work/thumb2.png",
    live: "https://lcctanauan.vercel.app/",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Credence",
    description: "CREDENCE APP is a cutting-edge platform designed to recognize and showcase professional achievements, skills, and certifications. The app aims to provide a comprehensive solution for individuals and organizations to manage, share, and verify credentials in a digital format, thereby fostering a culture of continuous learning and professional development.",
    stack: [{ name: "React.js"}, { name: "Node.js"},{ name: "Express.js"}, { name: "MongoDB"},{ name: "RESTFul API"}],
    image: "/assets/work/thumb3.png",
    live: "https://credence-uplift-project.netlify.app/login",
    github: "",
  },
  {
    num: "04",
    category: "fullstack",
    title: "Employee Information Management System (EIMS)",
    description: "This EMPLOYEE INFORMATION MANAGEMENT SYSTEM (EIMS) is designed to streamline the management of employee data within an organization. This project aims to provide a robust, user-friendly platform that allows for efficient handling of employee records, enhancing HR processes and improving overall organizational productivity.",
    stack: [{ name: "React.js"}, {name: "TailwindCss"}],
    image: "/assets/work/thumb4.png",
    live: "https://p3-react-app-sigma.vercel.app/",
    github: "https://github.com/alelimiranda227/p3-react-app",
  },
  {
    num: "05",
    category: "frontend",
    title: "Employee Information Management System (EIMS)",
    description: "This EMPLOYEE INFORMATION MANAGEMENT SYSTEM (EIMS) is designed to streamline the management of employee data within an organization. This project aims to provide a robust, user-friendly platform that allows for efficient handling of employee records, enhancing HR processes and improving overall organizational productivity.",
    stack: [{ name: "React.js"}, { name: "Node.js"},{ name: "Express.js"}, { name: "MongoDB"},{ name: "RESTFul API"}],
    image: "/assets/work/thumb4.png",
    live: "",
    github: "",
  },
];

// Function to chunk the stack list into groups of four
const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num*/}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project category*/}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              {/* project description*/}
              <p className="text-white/60">{project.description}</p>
            
              {/* stack*/}
              {chunkArray(project.stack, 4).map((chunk, index) => (
                <ul key={index} className="flex gap-4">
                  {chunk.map((item, idx) => (
                    <li key={idx} className="text-xl text-accent">
                      {item.name}
                      {idx !== chunk.length - 1 && ","}
                    </li>
                  ))}
                </ul>
              ))}
            
              {/* border */}
              <div className="border border-white/20"></div>

              
              {/* buttons */}

              <div className="flex items-center gap-4">

                {/* live project button*/}
                <div>
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>

                {/* github project button*/}
                <div>
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className="xl:h[520px] mb-12"
              onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        {/* overlay */}
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        {/* image */}
                          <div className="relative w-full h-full">
                            <Image 
                              src={project.image} 
                              fill 
                              objectFit="contain"
                              className="absolute inset-0" 
                              alt={project.title} 
                            />
                          </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/* slider buttons */}
                <WorkSliderBtns 
                  constainerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
            </Swiper>
          </div>  
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
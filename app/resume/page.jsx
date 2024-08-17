"use client";

import {
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaNodeJs  
} from "react-icons/fa"

import {
  SiTailwindcss, SiNextdotjs } from "react-icons/si";

import {Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger, 
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const allAboutMe = {
  title: "About Me",
  description:
    "",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Aleli D. Miranda"
    },
    {
      fieldName: "Contact No.",
      fieldValue: "(+63) 9157941955"
    },
    {
      fieldName: "Work Experience",
      fieldValue: "12+ Years"
    },
    {
      fieldName: "Discord",
      fieldValue: "AleliM"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Filipino"
    },
    {
      fieldName: "Email",
      fieldValue: "alelimiranda227@gmail.com"
    },
  ]
};

//Experience data

const experience = {
  icon: '/assets/resume/',
  title: 'My experience',
  description: "My enthusiasm for web development and programming drives me to integrate my skills into educating, mentoring, inspiring and supporting student growth. Additionally, it fuels my commitment to assisting the institution in developing systems that enhance their operations and further support students' success.",
  items: [
    {
      company:"La Consolacion College Tanauan",
      position: "Computer Teacher| OIC-Computer Lab.",
      duration: "2013 - Present",
    },
    {
      company:"La Consolacion College Tanauan",
      position: "Website Manager",
      duration: "2019 - 2024",
    },
    {
      company:"Teletech Lipa",
      position: "Technical Support",
      duration: "January - April 2009",
    },
    {
      company:"St. Scholastica's College - Westgrove",
      position: "Business Office/ IT Personnel",
      duration: "August 2001 - December 2008",
    },
  ]
};


//Education data
const education = {
  icon: '/assets/resume/',
  title: 'My Education',
  description: "",
  items: [
    {
      institution:"Uplift Code Camp, Inc.",
      degree: "Full Stack Development Bootcamp",
      duration: "January - July 20204",
    },
    {
      institution:"Lyceum of the Philippines University - Batangas",
      degree: "MS in Information Technology",
      duration: "November 2016 - June 2018",
    },
    {
      institution:"AMA Computer College - Cavite",
      degree: "BS Computer Science",
      duration: "June 1998 - May 2001",
    },
    {
      institution:"Rogationist College",
      degree: "Computer Information Technology",
      duration: "June 1994 - March 1997",
    },
  ]
};

//Skills data
const skills = {
  title: 'My Skills',
  description: "In addition to my knowledge in full stack web development, I have proficiency in Python and Java for versatile programming, 3D modeling with Blender, AutoCAD for precise designs, and Arduino for interactive projects. I also excel in Photoshop, graphic design, 2D animation, and video editing, allowing me to create visually compelling and professional content.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
  ]
};

const Resume = () => {
  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transistion: { delay: 2.4, duration: 0.4, ease: "easeIn"}, 
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs 
          defaulValue="experience"
          className = "flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="allAboutMe">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                 </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About Me */}
            <TabsContent value="allAboutMe" className="w-full text-centeer xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{allAboutMe.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {allAboutMe.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:max-0">
                  {allAboutMe.info.map((item, index) => {
                    return ( 
                      <li 
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
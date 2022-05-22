import { faUser, IconDefinition } from '@fortawesome/free-regular-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface AboutMeEntryProps {
  title: string,
  icon?: IconDefinition,
  skills: string[],
}

const AboutMe = () => {
  return (
    <div className="bg-slim-blue py-12">
      <div className="container">
        <div className="grid grid-cols-12 text-center bg-white shadow-lg">
          <div className="col-span-12 md:col-span-6 border-gray-100 border-r px-16 py-8">
            <AboutMeEntry title="Who I Am" icon={faUser} skills={[
              "I'm an enthusiastic and passionate worker. I love building meaningful relationships when working with people.              "
            ]} />
            <AboutMeEntry title="About Me" skills={[
              "22 years old",
              "Pakistani born",
              "Computer Science BSc from UTwente",
              "Current MSc Student at DTU"
            ]} />
            <AboutMeEntry title="Hobbies And Interests" skills={[
              "PC building enthusiast",
              "Apple enthusiast",
              "IoT and Homelab",
              "Online community management",
              "Privacy and security",
              "Podcasts and reading",
              "Travelling",
              "Cooking",
            ]} />
          </div>
          <div className="col-span-12 md:col-span-6 px-16 py-8">
            <AboutMeEntry title="What I Do" icon={faLaptopCode} skills={[
              "My primary focus is on frontend design and development. I enjoy making beautiful, responsive and fast websites.            "
            ]} />
            <AboutMeEntry title="My Tools" skills={[
              "Python",
              "React",
              "Flutter",
              "HTML5 and CSS3",
              "TailwindCSS",
              "TypeScript",
              "JavaScript",
              "NodeJS",
              "Figma",
              "Java",
              "Docker",
              "MongoDB and SQL",
              "Git",
              "Linux and server administration",
            ]} />
          </div>
        </div>
      </div>
    </div>
  )
}

const AboutMeEntry: React.FC<AboutMeEntryProps> = ({ title, icon, skills }) => {
  return (
    <div className="">
      {icon ? <p className="text-5xl text-blue-600 font-bold my-10"><FontAwesomeIcon icon={icon} /></p> : ""}
      <p className="text-md uppercase column-title mt-12 mb-6">{title}</p>
      {skills.map((skill, index) => <p key={index} className="text-md text-gray-800 my-1">{skill}</p>)}
    </div>
  )
}

export default AboutMe

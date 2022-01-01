import { faUser, IconDefinition } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface AboutMeEntryProps {
  title: string,
  icon?: IconDefinition,
  skills: string[],
}

const AboutMe = () => {
  return (
    <div className="bg-blue-600 py-12">
      <div className="container">
        <div className="flex flex-row text-center bg-white shadow-lg">
          <div className="flex-1 border-r-gray-400 px-24 py-8">
            <AboutMeEntry title="Who I Am" icon={faUser} skills={[
              "I'm an enthusiastic and passionate worker. I love building meaningful relationships when working with people.              "
            ]} />
            <AboutMeEntry title="About Me" icon={faUser} skills={[
              "22 years old",
              "Pakistani born",
              "Computer Science BSc",
              "1st year MSc Student at the Technical University of Denmark"
            ]} />
            <AboutMeEntry title="My Hobbies" skills={[
              "PC building enthusiast",
              "Hackintoshing and jailbreaking",
              "Online community management",
              "Privacy and security",
              "Podcasts and reading",
              "Travelling",
              "Cooking",
            ]}/>
          </div>
          <div className="flex-1 border-r-gray-400 px-8 py-8">
            Hey
          </div>
        </div>
      </div>
    </div>
  )
}

const AboutMeEntry: React.FC<AboutMeEntryProps> = ({ title, icon, skills }) => {
  return (
    <div className="flex-1 border-r-gray-400">
      { icon ? <p className="text-5xl text-blue-600 font-bold my-10"><FontAwesomeIcon icon={icon} /></p> : "" }
      <p className="text-lg uppercase column-title mt-12 mb-6">{title}</p>
      { skills.map((skill, index) => <p key={index} className="text-md text-gray-900 my-1">{skill}</p>) }
    </div>
  )
}

export default AboutMe

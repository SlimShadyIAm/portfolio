import React from 'react'
import SileoImg from "../assets/img/contributions/sileo.jpg"
import ParcilityImg from "../assets/img/contributions/parcility.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface Props {
  image: any,
  title: string,
  subtitle: string,
  demo: string
}

const Contributions = () => {
  const contributions = [
    {
      title: "GetSileo.app",
      subtitle: "Website for the iOS Jailbreak package manager, Sileo, made by Coolstar.",
      image: SileoImg,
      demo: "https://getsileo.app/"
    },
    {
      title: "Parcility",
      subtitle: "The single place to find the most popular Jailbreak tweak repositories and packages.      ",
      image: ParcilityImg,
      demo: "https://parcility.co/"
    },
  ]

  return (
    <div className="container mt-8 mb-16">
      <div className="font-bold text-3xl mb-3">Contributions</div>
      <div className="flex flex-row space-x-4">
        {contributions.map((contribution, index) => {
          return (
            <Contribution image={contribution.image} title={contribution.title} subtitle={contribution.subtitle} demo={contribution.demo} />
          )
        })}
      </div>
    </div>
  )
}

const Contribution: React.FC<Props> = ({ image, title, subtitle, demo }) => {
  return (
    <div className="bg-white rounded-xl custom-shadow overflow-hidden md:max-w-2xl flex-1">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src={image} />
        </div>
        <div className="p-8">
          <p className="block mt-1 text-2xl leading-tight font-bold text-gray-700">{title}</p>
          <p className="mt-2 text-gray-600">{subtitle}</p>
          <p className="mt-2"><a href={demo} className="uppercase tracking-wide text-sm text-slim-blue font-semibold hover:text-blue-800 transition-colors"><FontAwesomeIcon icon={faSearch} /> Demo</a></p>
        </div>
      </div>
    </div>
  )
}

export default Contributions

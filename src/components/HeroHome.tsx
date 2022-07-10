import pfp from "../assets/img/pfp.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const HeroHome = () => {
  return (
    <div className="flex justify-center">
      <div className="py-4 lg:mx-24 md:flex">
        <div className="flex grow mx-12 my-10 items-center justify-center">
          <img src={pfp} alt="Aamir" className="w-64 h-64 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all" />
        </div>
        <div className="grow mx-12 my-5">
          <p className="text-5xl md:text-right intro-text uppercase"><span className="mask">Aamir<br />Farooq</span></p>
          <p className="text-2xl text-white md:text-right font-bold my-2">Designer. Developer. Dreamer.</p>
          <div className="flex flex-row space-x-2 my-4 justify-center">
            <a href="https://github.com/SlimShadyIAm" className="px-2 py-3 text-white text-2xl text-center flex-1 bg-transparent-grey rounded-md shadow-md hover:shadow-lg transition-shadow flex justify-center items-center"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://twitter.com/optionnull" className="px-2 py-3 text-white text-2xl text-center flex-1 bg-transparent-grey rounded-md shadow-md hover:shadow-lg transition-shadow flex justify-center items-center"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.linkedin.com/in/farooqaamir" className="px-2 py-3 text-white text-2xl text-center flex-1 bg-transparent-grey rounded-md shadow-md hover:shadow-lg transition-shadow  flex justify-center items-center"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="mailto:me@aamirfarooq.dev" className="px-2 py-3 text-white text-2xl text-center flex-1 bg-transparent-grey rounded-md shadow-md hover:shadow-lg transition-shadow  flex justify-center items-center"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
          <div className="flex flex-row space-x-2 my-4">
            <Link to="/past-work" className="px-2 py-2 text-white text-lg font-bold text-center flex-1 bg-transparent-grey rounded-md shadow-md hover:shadow-lg">View my past work</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroHome

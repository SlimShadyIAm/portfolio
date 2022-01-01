
import { Fragment } from "react"
import AboutMe from "../components/AboutMe"
import Header from "../components/Header"
import HeroHome from "../components/HeroHome"


const Home = () => {
  return (
    <Fragment>
      <div className="bg-slim-purple">
        <Header />
        <HeroHome />
        <div className="spacer"></div>
        <AboutMe />
      </div>
    </Fragment>
  )
}

export default Home